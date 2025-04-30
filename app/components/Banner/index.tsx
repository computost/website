import type { PropsWithChildren, ReactNode } from "react";

export function Banner({ children }: PropsWithChildren): ReactNode {
  return (
    <header className="flex justify-center gap-10 bg-orange-100 dark:bg-orange-950">
      {children}
    </header>
  );
}
