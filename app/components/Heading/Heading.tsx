import type { PropsWithChildren, ReactNode } from "react";

export function Heading({
  children,
  level,
}: PropsWithChildren<{ level: 1 | 2 | 3 }>): ReactNode {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    default:
      assertUnreachable(level);
  }
}

function assertUnreachable(value: never): never {
  throw new Error(
    `Unreachable code was reached. Unexpected value: ${
      // `never` cannot be passed into a template expression
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      value
    }`,
  );
}
