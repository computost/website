import type { PropsWithChildren, ReactNode } from "react";

import { mergeClassNames } from "~/utils/mergeClassNames";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>): ReactNode {
  return (
    <article
      className={mergeClassNames(
        "bg-green-50 p-4 dark:bg-green-950",
        className,
      )}
    >
      {children}
    </article>
  );
}
