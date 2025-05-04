import type { PropsWithChildren, ReactNode } from "react";

import { mergeClassNames } from "~/utils/mergeClassNames";

export function Heading({
  children,
  className,
  level,
}: HeadingProps): ReactNode {
  switch (level) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return (
        <h2
          className={mergeClassNames(
            "text-3xl text-emerald-900 dark:text-emerald-100",
            className,
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={mergeClassNames(
            "text-2xl font-bold text-yellow-900 dark:text-amber-200",
            className,
          )}
        >
          {children}
        </h3>
      );
    default:
      assertUnreachable(level);
  }
}

type HeadingProps = PropsWithChildren<{
  className?: string;
  level: 1 | 2 | 3;
}>;

function assertUnreachable(value: never): never {
  throw new Error(
    `Unreachable code was reached. Unexpected value: ${
      // `never` cannot be passed into a template expression
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      value
    }`,
  );
}
