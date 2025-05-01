import type { PropsWithChildren, ReactNode } from "react";

export function Banner({ children }: PropsWithChildren): ReactNode {
  return (
    <header className="mb-2 flex justify-center bg-orange-100 pt-2 pb-2 shadow-md shadow-black dark:bg-orange-950">
      <div className="flex w-full max-w-7xl items-start gap-4">{children}</div>
    </header>
  );
}
