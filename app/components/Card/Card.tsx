import type { PropsWithChildren, ReactNode } from "react";

import { mergeClassNames } from "~/utils/mergeClassNames";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>): ReactNode {
  return (
    <article
      className={mergeClassNames(
        "flex flex-col gap-4 rounded-sm border border-[#d0d0d0] bg-[#eeeeee] p-4 dark:border-[#2f2f2f] dark:bg-[#121212]",
        className,
      )}
    >
      {children}
    </article>
  );
}
