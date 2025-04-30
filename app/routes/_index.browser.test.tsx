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
          </ul>
        </div>
      </nav>
    </div>
  `);

  const navigation = screen.getByRole("navigation");
  expect(
    within(navigation).getByRole("link", { name: "Home" }),
  ).toBeInTheDocument();
});
