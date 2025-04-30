import { expect } from "@playwright/test";

import { test } from "../../../playwright/fixture";

test("Renders the home page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 2, name: "About Us" }),
  ).toBeVisible();
});
