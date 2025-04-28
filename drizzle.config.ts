import type { Config } from "drizzle-kit";

export default {
  // The properties of dbCredentials can actually be undefined at certain stages
  // of the build / test process, so it is okay that these environment variables
  // might not be defined.
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    token: process.env.CLOUDFLARE_API_TOKEN!,
  },
  dialect: "sqlite",
  driver: "d1-http",
  out: "./drizzle",
  schema: "./database/schema.ts",
} satisfies Config;
