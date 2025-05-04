import type {
  AppLoadContext,
  EntryContext,
  HandleErrorFunction,
} from "react-router";

import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { ServerRouter } from "react-router";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext,
) {
  if (shouldIgnoreRequest(request)) {
    return new Response();
  }

  let shellRendered = false;
  const userAgent = request.headers.get("user-agent");

  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      onError(error: unknown) {
        responseStatusCode = 500;
        // Log streaming rendering errors from inside the shell.  Don't log
        // errors encountered during initial shell rendering since they'll
        // reject and get logged in handleDocumentRequest.
        if (shellRendered) {
          console.error(error);
        }
      },
    },
  );
  shellRendered = true;

  // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
  // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
  if ((userAgent && isbot(userAgent)) || routerContext.isSpaMode) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

export const handleError: HandleErrorFunction = (error, { request }) => {
  if (!request.signal.aborted) {
    if (!shouldIgnoreRequest(request)) {
      console.error(error);
    }
  }
};

/**
 * This handles a known issue in which the React Dev Tools will attempt to
 * request an asset that Vite does not know how to serve. It only occurs when
 * running in dev mode.
 *
 * https://github.com/remix-run/remix/issues/9311
 */
function shouldIgnoreRequest(request: Request): boolean {
  return import.meta.env.DEV && request.url.endsWith("/installHook.js.map");
}
