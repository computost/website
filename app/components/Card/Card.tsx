import type { PropsWithChildren, ReactNode } from "react";

export function Card({ children }: PropsWithChildren): ReactNode {
  return (
    <article className="bg-green-50 p-2 dark:bg-green-950">{children}</article>
  );
}
