declare module "cloudflare:test" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ProvidedEnv extends Env {
    TEST_MIGRATIONS: D1Migration[];
  }
}
