import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { expect, it } from "vitest";

import Layout from "./_index";

it("renders static content", () => {
  const { container } = render(<Layout />, {
    wrapper: MemoryRouter,
  });

  expect(container).toMatchInlineSnapshot(`
    <div>
      <header
        class="flex justify-center gap-10 bg-orange-100 dark:bg-orange-950"
      >
        <a
          data-discover="true"
          href="/"
        >
          Computost Consulting
        </a>
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
        >
          <div
            style="position: relative;"
          >
            <ul
              data-orientation="horizontal"
              dir="ltr"
            >
              <li>
                <a
                  data-discover="true"
                  data-radix-collection-item=""
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  data-discover="true"
                  data-radix-collection-item=""
                  href="/coop"
                >
                  Co-op Info
                </a>
              </li>
              <li>
                <a
                  data-discover="true"
                  data-radix-collection-item=""
                  href="/services"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <footer>
        <p>
          Contact us at
           
          <a
            href="mailto:consulting@computost.com"
          >
            consulting@computost.com
          </a>
        </p>
        <p>
          Copyright © 
          2025
           Computost Consulting, LLC
        </p>
      </footer>
    </div>
  `);

  const navigation = screen.getByRole("navigation");
  expect(
    within(navigation).getByRole("link", { name: "Home" }),
  ).toBeInTheDocument();
});
