import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { PageContext } from "./types";
import { Template } from "./Template";
import { FilledContext, Helmet, HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";

export const passToClient = ["documentProps", "pageProps"];

export const render = ({ Page, pageProps }: PageContext) => {
  const helmetContext: FilledContext = {} as FilledContext;
  const page = ReactDOMServer.renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Computost Consulting</title>
        </Helmet>
        <Template>
          <Page {...pageProps} />
        </Template>
      </HelmetProvider>
    </StrictMode>
  );
  return {
    documentHtml: dangerouslySkipEscape(
      `<!DOCTYPE html>${ReactDOMServer.renderToString(
        <StrictMode>
          <html lang="en">
            <head>
              <meta charSet="UTF-8" />
              <link rel="icon" type="image/svg+xml" href="/computost.svg" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <>{helmetContext.helmet.title.toComponent()}</>
            </head>
            <body>
              <div id="root" dangerouslySetInnerHTML={{ __html: page }} className="rootStyles"/>
            </body>
          </html>
        </StrictMode>
      )}`
    ),
  };
};
