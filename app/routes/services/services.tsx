import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";

import type { Route } from "./+types/services";

export default function Services(_: Route.ComponentProps) {
  return (
    <main>
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
      <Heading level={2}>Available Services</Heading>
      <ul>
        <li>New Application Development</li>
        <li>Enhancements to Existing Applications</li>
        <li>Code Reviews of Existing Applications</li>
        <li>Deployment and Infrastructure Configuration</li>
        <li>Real Time Data Integrations</li>
        <li>Workshops</li>
      </ul>
      <Heading level={2}>Core Competencies</Heading>
      <Heading level={3}>Languages</Heading>
      <ul>
        <li>C#</li>
        <li>SQL</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Powershell</li>
        <li>Ruby</li>
      </ul>
      <Heading level={3}>Frameworks / Libraries</Heading>
      <ul>
        <li>Webpack</li>
        <li>React</li>
        <li>Vite</li>
        <li>Blazor</li>
        <li>MaterialUI</li>
        <li>FluentUI</li>
      </ul>
      <Heading level={3}>Microsoft</Heading>
      <ul>
        <li>Power Platform</li>
        <li>Azure</li>
        <li>Business Central</li>
      </ul>
      <Heading level={3}>GitHub</Heading>
      <ul>
        <li>Workflows</li>
        <li>Actions</li>
        <li>Repo Management</li>
      </ul>
      <Heading level={3}>Google</Heading>
      <ul>
        <li>Firebase</li>
        <li>Google Cloud Storage</li>
      </ul>
      <Heading level={3}>CMS Systems</Heading>
      <ul>
        <li>Umbraco</li>
      </ul>
    </main>
  );
}
