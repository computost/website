import type { Route } from "./+types/services";

export default function Services(_: Route.ComponentProps) {
  return (
    <main>
      <h1>Services</h1>
      <h2>Standard Consulting Services</h2>
      <p>
        Computost provides software consulting services at an hourly rate. For
        details on our hourly rates, please reach out to{" "}
        <a href="mailto:consulting@computost.com">consulting@computost.com</a>.
      </p>
      <h2>Mission Driven Consulting Services</h2>
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
      <h2>Available Services</h2>
      <ul>
        <li>New Application Development</li>
        <li>Enhancements to Existing Applications</li>
        <li>Code Reviews of Existing Applications</li>
        <li>Deployment and Infrastructure Configuration</li>
        <li>Real Time Data Integrations</li>
        <li>Workshops</li>
      </ul>
      <h2>Core Competencies</h2>
      <h3>Languages</h3>
      <ul>
        <li>C#</li>
        <li>SQL</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Powershell</li>
        <li>Ruby</li>
      </ul>
      <h3>Frameworks / Libraries</h3>
      <ul>
        <li>Webpack</li>
        <li>React</li>
        <li>Vite</li>
        <li>Blazor</li>
        <li>MaterialUI</li>
        <li>FluentUI</li>
      </ul>
      <h3>Microsoft</h3>
      <ul>
        <li>Power Platform</li>
        <li>Azure</li>
        <li>Business Central</li>
      </ul>
      <h3>GitHub</h3>
      <ul>
        <li>Workflows</li>
        <li>Actions</li>
        <li>Repo Management</li>
      </ul>
      <h3>Google</h3>
      <ul>
        <li>Firebase</li>
        <li>Google Cloud Storage</li>
      </ul>
      <h3>CMS Systems</h3>
      <ul>
        <li>Umbraco</li>
      </ul>
    </main>
  );
}
