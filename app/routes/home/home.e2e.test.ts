import { expect } from "@playwright/test";

import { test } from "../../../playwright/fixture";

test("Renders the home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("body")).toMatchAriaSnapshot();
});
