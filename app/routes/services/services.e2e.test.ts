import { expect } from "@playwright/test";

import { test } from "../../../playwright/fixture";

test("Renders the services page", async ({ page }) => {
  await page.goto("/services");

  await expect(
    page.getByRole("heading", { level: 1, name: "Services" }),
  ).toBeVisible();
});
