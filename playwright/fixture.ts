import { test as base } from "@playwright/test";
import { execa } from "execa";
import { rm } from "fs/promises";
import getPort from "get-port";
import waitOn from "wait-on";

export const test = base.extend({
  // Playwright requires a destructure object for fixtures.
  // https://vitest.dev/guide/test-context.html#fixture-initialization
  // eslint-disable-next-line no-empty-pattern
  baseURL: async ({}, use, testInfo) => {
    const port = await getPort();
    const inspectorPort = await getPort();
    const folder = `.playwright-wrangler/${testInfo.parallelIndex}`;

    await rm(folder, { force: true, recursive: true });

    await execa`npm run db:migrate -- --persist-to ${folder}`;

    const process = execa`
      npm run start --
        --inspector-port ${inspectorPort}
        --persist-to ${folder}
        --port ${port}
    `;
    await waitOn({ resources: [`http://127.0.0.1:${port}`] });

    await use(`http://127.0.0.1:${port}`);

    process.kill();
  },
});
