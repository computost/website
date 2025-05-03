import { Card, CardTitle } from "~/components/Card";
import { Heading } from "~/components/Heading";
import { InAppLink } from "~/components/InAppLink";

import type { Route } from "./+types/home";

// export async function action({ context, request }: Route.ActionArgs) {
// }

// export async function loader({ context }: Route.LoaderArgs) {
//   return {};
// }

export default function Home(
  _ /* { actionData, loaderData } */ : Route.ComponentProps,
) {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <Card className="max-w-6xl">
        <CardTitle>About Us</CardTitle>
        <p>
          We are a small team of software engineering consultants who specialize
          in Power Platform and Azure technologies. Our team members have an
          average of 15 years of experience working with Power Platform and
          Microsoft technologies. In our careers, we have provided consulting to
          help build large enterprise projects.
        </p>
      </Card>
      <div className="flex flex-col items-center gap-8 min-[76rem]:flex-row min-[76rem]:items-start">
        <Card className="max-w-[35rem]">
          <CardTitle>The Co-op Vision</CardTitle>
          <p>
            Computost is a cooperative governed by a working agreement tailored
            to maximize dividing business responsibilities and profits to its
            members. Our vision is to create an inclusive democratic workplace
            for software consultants.
          </p>
          <InAppLink to="/coop">Read more about cooperatives</InAppLink>
        </Card>
        <Card className="max-w-[35rem]">
          <CardTitle>Services</CardTitle>
          <p>
            Computost provides software consulting services at a competitive
            hourly rate. All members are highly skilled and experienced
            developers. Our experience is primarily with Microsoft products but
            our services are not limited to Microsoft products.
          </p>
          <InAppLink to="/services">Read more about our services</InAppLink>
        </Card>
      </div>
      <div className="flex flex-col items-center gap-8 min-[76rem]:flex-row min-[76rem]:items-start">
        <div className="flex flex-col items-center gap-8 min-[47rem]:flex-row min-[47rem]:items-start">
          <Card className="max-w-[27rem]">
            <CardTitle>Our Principals</CardTitle>
            <section>
              <Heading level={3}>Quality</Heading>
              <p>
                If anything is worth doing, it&rsquo;s worth doing right. No job
                is finished until it meets our standards of documentation,
                styling, testing, and deployability.
              </p>
            </section>
            <section>
              <Heading level={3}>Communication</Heading>
              <p>
                We code in an open kitchen. Everything we make, our customers
                have access to it at all times.
              </p>
            </section>
            <section>
              <Heading level={3}>Maintainability</Heading>
              <p>
                As solution architects, we build everything with support in
                mind.
              </p>
            </section>
            <section>
              <Heading level={3}>Flexibility</Heading>
              <p>
                Your technical solutions should grow with your business. We
                deliver value in frequent, small intervals, continuing to
                reassess what you need after each delivery.
              </p>
            </section>
          </Card>
          <Card className="w-[14rem]">
            <CardTitle>Technologies</CardTitle>
            <section>
              <Heading level={3}>Power Platform</Heading>
              <ul>
                <li>Power Apps</li>
                <li>Power Automate</li>
                <li>Power Pages</li>
              </ul>
            </section>
            <section>
              <Heading level={3}>Azure</Heading>
              <ul>
                <li>Data Factory</li>
                <li>Function Apps</li>
                <li>Service Bus</li>
                <li>SQL</li>
              </ul>
            </section>
            <section>
              <Heading level={3}>DevOps</Heading>
              <ul>
                <li>Azure DevOps</li>
                <li>GitHub</li>
                <li>GitLab</li>
              </ul>
            </section>
          </Card>
        </div>
        <Card className="max-w-[27rem]">
          <CardTitle>Projects</CardTitle>
          <p>
            While we work with customers, we often innovate tools that can
            provide value for the larger software development community. Below
            are some of the tools we have created:
          </p>
          <ul>
            <li>
              <a href="https://github.com/computost/pac-fetch">pac-fetch</a>
            </li>
          </ul>
        </Card>
      </div>
    </main>
  );
}
