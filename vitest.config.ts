import {
  defineWorkersProject,
  readD1Migrations,
} from "@cloudflare/vitest-pool-workers/config";
import { join } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineWorkersProject(async () => {
  const migrations = await readD1Migrations(join(__dirname, "./drizzle"));

  return {
    plugins: [tsconfigPaths()],
    test: {
      poolOptions: {
        workers: {
          main: "./workers/app.ts",
          miniflare: {
            bindings: {
              TEST_MIGRATIONS: migrations,
            },
            d1Databases: ["DB"],
          },
          wrangler: {
            configPath: "./wrangler.jsonc",
            environment: "test",
          },
        },
      },
      restoreMocks: true,
      workspace: [
        {
          plugins: [tsconfigPaths()],
          test: {
            environment: "jsdom",
            globals: true,
            include: ["app/**/*.browser.test.{ts,tsx}"],
            restoreMocks: true,
            setupFiles: ["./tests/register-jest-dom.ts"],
          },
        },
        {
          extends: true,
          test: {
            include: ["app/**/*.worker.test.ts"],
            setupFiles: ["./tests/apply-migrations.ts"],
          },
        },
      ],
    },
  };
});
