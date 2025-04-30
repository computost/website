import { render } from "@testing-library/react";
import { createRoutesStub, useMatches, useParams } from "react-router";
import { expect, it, vi } from "vitest";

import type { Route } from "./+types/home";

import Home from "./home";

type Action = (
  args: Route.ActionArgs,
) =>
  | Promise<Route.ComponentProps["actionData"]>
  | Route.ComponentProps["actionData"];

const action = vi.fn<Action>();

const Stub = createRoutesStub([
  {
    action,
    Component: () => (
      <Home
        // actionData={useActionData()}
        loaderData={undefined /* useLoaderData() */}
        matches={useMatches() as Route.ComponentProps["matches"]}
        params={useParams()}
      />
    ),
    path: "/",
  },
]);

it("renders static content", () => {
  const { container } = render(<Stub />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      Hello, World!
    </div>
  `);
});
