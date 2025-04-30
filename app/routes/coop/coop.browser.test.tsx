import { render } from "@testing-library/react";
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
  const { container } = render(<Stub initialEntries={["/coop"]} />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <main>
        <h1>
          Co-op Info
        </h1>
        <h2>
          Why a Co-op of Software Consultants?
        </h2>
        <p>
          The founding members of Computost have spent the majority of their professional careers in the software consulting industry. Consulting can be difficult for some as the hourly rate is often known by the developer. Knowing the billed rate and pay rate can lead some to wonder where the difference is going. Usually, the developers entering billable hours are far removed from the discussion of where the profits generated from their effort is allocated. This is one of the core problems Computost aims to fix as a cooperative. The projects Computost takes and how profit is distributed are decided by the members.
        </p>
        <p>
          We strive to create an environment where developers have the chance to do positive, meaningful, work and are compensated fairly based on their patronage.
        </p>
        <h2>
          Our Co-op Principles
        </h2>
        <p>
          There are an infinite number of ways to run a cooperative. We have chosen the following principles to run Computost by:
        </p>
        <h3>
          One Member One Vote
        </h3>
        <p>
          Every member has the same voting weight.
        </p>
        <h3>
          Member Managed
        </h3>
        <p>
          Every member is required to vote on each decision or proposal. Any member can raise a proposal to vote on.
        </p>
        <h3>
          No Hierarchy
        </h3>
        <p>
          There are no managers. All members have the same level of authority and autonomy.
        </p>
        <h3>
          Shared Profits and Losses
        </h3>
        <p>
          Surplus from billable work is divided based on patronage, which is defined by billable hours worked in a period of time. If times are busy and there is a lot of work, we all share the benefits based on our contribution.
        </p>
        <p>
          On the other hand, if billable work is in limited supply, it will be felt by all and provide incentive for all members to contribute to the cooperative.
        </p>
      </main>
    </div>
  `);
});
