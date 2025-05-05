import type { PropsWithChildren, ReactNode } from "react";

import { Card, CardTitle } from "~/components/Card";
import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";

import type { Route } from "./+types/services";

export default function Services(_: Route.ComponentProps) {
  return (
    <main className="mr-auto ml-auto flex max-w-6xl flex-col gap-4 p-8">
      <Heading level={1}>Services</Heading>

      <Heading level={2}>Standard Consulting Services</Heading>
      <p>
        Computost provides software consulting services at an hourly rate. For
        details on our hourly rates, please reach out to{" "}
        <ExternalLink href="mailto:consulting@computost.com">
          consulting@computost.com
        </ExternalLink>
        .
      </p>

      <Heading level={2}>Mission Driven Consulting Services</Heading>
      <p>
        Not all projects that provide value to the greater community have the
        capital to hire a team of developers to build and support their product.
        Computost provides a service called &ldquo;Mission Driven&rdquo; which
        gives projects, that we see as highly beneficial to the community, with
        low or non existent funding an opportunity to be created and provide
        value.
      </p>
      <p>
        If Computost members collectively agree to take on a Mission Driven
        project, we will work with the client to make their product a reality.
        An hourly rate is decided upon. Hours spent are tracked. After the
        product is created, if the product generates revenue, payments over time
        based on profits are made to eventually pay off the effort spent to
        create the product.
      </p>

      <Card>
        <CardTitle>Available Services</CardTitle>
        <ul className="flex flex-col gap-0.5">
          <BigListItem>New Application Development</BigListItem>
          <BigListItem>Enhancements to Existing Applications</BigListItem>
          <BigListItem>Code Reviews of Existing Applications</BigListItem>
          <BigListItem>Deployment and Infrastructure Configuration</BigListItem>
          <BigListItem>Real Time Data Integrations</BigListItem>
          <BigListItem>Workshops</BigListItem>
        </ul>
      </Card>

      <Card>
        <CardTitle>Core Competencies</CardTitle>
        <div className="flex flex-row flex-wrap gap-8">
          <CoreCompetenciesCategory>
            <Heading level={3}>Languages</Heading>
            <ul>
              <li>C#</li>
              <li>SQL</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Powershell</li>
              <li>Ruby</li>
            </ul>
          </CoreCompetenciesCategory>
          <CoreCompetenciesCategory>
            <Heading level={3}>
              Frameworks
              <br />/ Libraries
            </Heading>
            <ul>
              <li>Webpack</li>
              <li>React</li>
              <li>Vite</li>
              <li>Blazor</li>
              <li>MaterialUI</li>
              <li>FluentUI</li>
            </ul>
          </CoreCompetenciesCategory>
          <CoreCompetenciesCategory>
            <Heading level={3}>Microsoft</Heading>
            <ul>
              <li>Power Platform</li>
              <li>Azure</li>
              <li>Business Central</li>
            </ul>
          </CoreCompetenciesCategory>
          <CoreCompetenciesCategory>
            <Heading level={3}>GitHub</Heading>
            <ul>
              <li>Workflows</li>
              <li>Actions</li>
              <li>Repo Management</li>
            </ul>
          </CoreCompetenciesCategory>
          <CoreCompetenciesCategory>
            <Heading level={3}>Google</Heading>
            <ul>
              <li>Firebase</li>
              <li>Google Cloud Storage</li>
            </ul>
          </CoreCompetenciesCategory>
          <CoreCompetenciesCategory>
            <Heading level={3}>CMS Systems</Heading>
            <ul>
              <li>Umbraco</li>
            </ul>
          </CoreCompetenciesCategory>
        </div>
      </Card>
    </main>
  );
}

function BigListItem({ children }: PropsWithChildren): ReactNode {
  return (
    <li className="rounded-lg bg-emerald-300 pt-2 pb-2 text-center text-xl dark:bg-emerald-700">
      {children}
    </li>
  );
}

function CoreCompetenciesCategory({ children }: PropsWithChildren): ReactNode {
  return <div className="flex flex-col gap-2">{children}</div>;
}
