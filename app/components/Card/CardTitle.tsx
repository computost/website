import type { PropsWithChildren, ReactNode } from "react";

export function CardTitle({ children }: PropsWithChildren): ReactNode {
  return (
    <h2 className="mb-2 border-b border-b-emerald-900 pb-2 text-center text-3xl text-emerald-900 dark:border-b-emerald-100 dark:text-emerald-100">
      {children}
    </h2>
  );
}
