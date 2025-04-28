import { expect } from "@playwright/test";

import { test } from "../../playwright/fixture";

test("Guests can sign the guestbook", async ({ page }) => {
  await page.goto("/");

  expect(
    await page.getByRole("list").last().getByRole("listitem").count(),
  ).toBe(1);

  await page.getByRole("textbox", { name: "Name" }).fill("Jane Teacher");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("jane.teacher@school.edu");
  await page
    .getByRole("button", { name: "Sign Guest Book" })
    .click({ force: true });

  await page.waitForLoadState("networkidle");

  expect(
    await page.getByRole("list").last().getByRole("listitem").count(),
  ).toBe(2);
  await expect(
    page.getByRole("listitem").filter({ hasText: "Jane Teacher" }),
  ).toBeVisible();
});
