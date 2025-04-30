import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Computost Consulting - Home" }];
}

// export async function action({ context, request }: Route.ActionArgs) {
// }

// export async function loader({ context }: Route.LoaderArgs) {
//   return {};
// }

export default function Home(
  _ /* { actionData, loaderData } */ : Route.ComponentProps,
) {
  return (
    <main>
      <article>
        <h2>About Us</h2>
        <p>
          We are a small team of software engineering consultants who specialize
          in Power Platform and Azure technologies. Our team members have an
          average of 15 years of experience working with Power Platform and
          Microsoft technologies. In our careers, we have provided consulting to
          help build large enterprise projects.
        </p>
      </article>
      <article>
        <h2>The Co-op Vision</h2>
        <p>
          Computost is a cooperative governed by a working agreement tailored to
          maximize dividing business responsibilities and profits to its
          members. Our vision is to create an inclusive democratic workplace for
          software consultants.
        </p>
      </article>
      <article>
        <h2>Services</h2>
        <p>
          Computost provides software consulting services at a competitive
          hourly rate. All members are highly skilled and experienced
          developers. Our experience is primarily with Microsoft products but
          our services are not limited to Microsoft products.
        </p>
      </article>
      <article>
        <h2>Our Principals</h2>
        <section>
          <h3>Quality</h3>
          <p>
            If anything is worth doing, it&rsquo;s worth doing right. No job is
            finished until it meets our standards of documentation, styling,
            testing, and deployability.
          </p>
        </section>
        <section>
          <h3>Communication</h3>
          <p>
            We code in an open kitchen. Everything we make, our customers have
            access to it at all times.
          </p>
        </section>
        <section>
          <h3>Maintainability</h3>
          <p>
            As solution architects, we build everything with support in mind.
          </p>
        </section>
        <section>
          <h3>Flexibility</h3>
          <p>
            Your technical solutions should grow with your business. We deliver
            value in frequent, small intervals, continuing to reassess what you
            need after each delivery.
          </p>
        </section>
      </article>
      <article>
        <h2>Technologies</h2>
        <section>
          <h3>Power Platform</h3>
          <ul>
            <li>Power Apps</li>
            <li>Power Automate</li>
            <li>Power Pages</li>
          </ul>
        </section>
        <section>
          <h3>Azure</h3>
          <ul>
            <li>Data Factory</li>
            <li>Function Apps</li>
            <li>Service Bus</li>
            <li>SQL</li>
          </ul>
        </section>
        <section>
          <h3>DevOps</h3>
          <ul>
            <li>Azure DevOps</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </section>
      </article>
      <article>
        <h2>Projects</h2>
        <p>
          While we work with customers, we often innovate tools that can provide
          value for the larger software development community. Below are some of
          the tools we have created:
        </p>
        <ul>
          <li>
            <a href="https://github.com/computost/pac-fetch">pac-fetch</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
