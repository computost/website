import { render, screen } from "@testing-library/react";
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
  render(<Stub />);

  expect(
    screen.getByRole("heading", { level: 2, name: "About Us" }),
  ).toBeInTheDocument();
});
