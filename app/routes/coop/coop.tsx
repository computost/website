import { Heading } from "~/components/Heading";

import type { Route } from "./+types/coop";

export default function Coop(_: Route.ComponentProps) {
  return (
    <main>
      <Heading level={1}>Co-op Info</Heading>
      <Heading level={2}>Why a Co-op of Software Consultants?</Heading>
      <p>
        The founding members of Computost have spent the majority of their
        professional careers in the software consulting industry. Consulting can
        be difficult for some as the hourly rate is often known by the
        developer. Knowing the billed rate and pay rate can lead some to wonder
        where the difference is going. Usually, the developers entering billable
        hours are far removed from the discussion of where the profits generated
        from their effort is allocated. This is one of the core problems
        Computost aims to fix as a cooperative. The projects Computost takes and
        how profit is distributed are decided by the members.
      </p>
      <p>
        We strive to create an environment where developers have the chance to
        do positive, meaningful, work and are compensated fairly based on their
        patronage.
      </p>
      <Heading level={2}>Our Co-op Principles</Heading>
      <p>
        There are an infinite number of ways to run a cooperative. We have
        chosen the following principles to run Computost by:
      </p>
      <Heading level={3}>One Member One Vote</Heading>
      <p>Every member has the same voting weight.</p>
      <Heading level={3}>Member Managed</Heading>
      <p>
        Every member is required to vote on each decision or proposal. Any
        member can raise a proposal to vote on.
      </p>
      <Heading level={3}>No Hierarchy</Heading>
      <p>
        There are no managers. All members have the same level of authority and
        autonomy.
      </p>
      <Heading level={3}>Shared Profits and Losses</Heading>
      <p>
        Surplus from billable work is divided based on patronage, which is
        defined by billable hours worked in a period of time. If times are busy
        and there is a lot of work, we all share the benefits based on our
        contribution.
      </p>
      <p>
        On the other hand, if billable work is in limited supply, it will be
        felt by all and provide incentive for all members to contribute to the
        cooperative.
      </p>
    </main>
  );
}
