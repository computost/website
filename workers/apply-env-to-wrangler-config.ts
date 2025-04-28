import type { Unstable_Config } from "wrangler";

import { readFile, writeFile } from "fs/promises";
import JSONC from "tiny-jsonc";

assertEnvironmentVariablesArePresent([
  "CLOUDFLARE_WORKER_NAME",
  "CLOUDFLARE_ACCOUNT_ID",
  "CLOUDFLARE_DATABASE_ID",
  "CLOUDFLARE_DATABASE_NAME",
]);

const contents = JSONC.parse(
  (await readFile("./wrangler.jsonc")).toString(),
) as Unstable_Config;

contents.name = process.env.CLOUDFLARE_WORKER_NAME;
contents.account_id = process.env.CLOUDFLARE_ACCOUNT_ID;
contents.d1_databases[0].database_id = process.env.CLOUDFLARE_DATABASE_ID;
contents.d1_databases[0].database_name = process.env.CLOUDFLARE_DATABASE_NAME;

await writeFile("./wrangler.jsonc", JSON.stringify(contents));

function assertEnvironmentVariablesArePresent(variableNames: string[]) {
  const missingVariables = variableNames.filter((name) => !process.env[name]);
  if (missingVariables.length > 0) {
    throw new Error(
      [
        `Missing required environment variables:`,
        ...missingVariables.map((name) => `- ${name}`),
      ].join("\n"),
    );
  }
}
