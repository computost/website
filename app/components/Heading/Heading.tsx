import type { PropsWithChildren, ReactNode } from "react";

import { mergeClassNames } from "~/utils/mergeClassNames";

import { assertUnreachable } from "../../utils/assertUnreachable";

export function Heading({
  children,
  className,
  level,
}: HeadingProps): ReactNode {
  switch (level) {
    case 1:
      return (
        <h1
          className={mergeClassNames(
            "mb-2 border-b p-2 text-center text-4xl text-orange-950 dark:text-orange-50",
            className,
          )}
        >
          {children}
        </h1>
      );
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
