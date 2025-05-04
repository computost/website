export function assertUnreachable(value: never): never {
  throw new Error(
    `Unreachable code was reached. Unexpected value: ${
      // `never` cannot be passed into a template expression
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      value
    }`,
  );
}
