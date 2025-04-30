import { render, screen } from "@testing-library/react";
import { createRoutesStub, useMatches, useParams } from "react-router";
import { expect, it, vi } from "vitest";

import type { Route } from "./+types/coop";

import Coop from "./coop";

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
      <Coop
        // actionData={useActionData()}
        loaderData={undefined /* useLoaderData() */}
        matches={useMatches() as Route.ComponentProps["matches"]}
        params={useParams()}
      />
    ),
    path: "/coop",
  },
]);

it("renders static content", () => {
  render(<Stub initialEntries={["/coop"]} />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Co-op Info" }),
  ).toBeInTheDocument();
});
