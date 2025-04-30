import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { expect, it } from "vitest";

import Layout from "./_index";

it("renders static content", () => {
  render(<Layout />, {
    wrapper: MemoryRouter,
  });

  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
