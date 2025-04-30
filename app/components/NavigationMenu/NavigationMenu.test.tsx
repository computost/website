import type { PropsWithChildren } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it } from "vitest";

import { NavigationMenu, NavigationMenuItem } from ".";

it("renders its children as links", () => {
  render(
    <NavigationMenu>
      <NavigationMenuItem to="page-1">Page 1</NavigationMenuItem>
      <NavigationMenuItem to="page-2">Page 2</NavigationMenuItem>
      <NavigationMenuItem to="page-3">Page 3</NavigationMenuItem>
    </NavigationMenu>,
    { wrapper: MemoryRouter },
  );

  expect(screen.getByRole("link", { name: "Page 1" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Page 2" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Page 3" })).toBeInTheDocument();
});

describe("when the user clicks on a link", () => {
  it("routes to the page for that link", async () => {
    const user = userEvent.setup();

    render(
      <>
        <NavigationMenu>
          <NavigationMenuItem to="page-1">Page 1</NavigationMenuItem>
        </NavigationMenu>
        <Routes>
          <Route element={null} index />
          <Route element={<>Rendered page 1</>} path="/page-1" />
        </Routes>
      </>,
      {
        wrapper: ({ children }: PropsWithChildren) => (
          <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
        ),
      },
    );

    await user.click(screen.getByRole("link", { name: "Page 1" }));

    expect(screen.getByText("Rendered page 1")).toBeInTheDocument();
  });
});
