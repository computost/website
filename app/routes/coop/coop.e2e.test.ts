import { expect } from "@playwright/test";

import { test } from "../../../playwright/fixture";

test("Renders the co-op info page", async ({ page }) => {
  await page.goto("/coop");

  await expect(
    page.getByRole("heading", { level: 1, name: "Co-op Info" }),
  ).toBeVisible();
});
