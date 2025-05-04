import type { PropsWithChildren, ReactNode } from "react";

import { Heading } from "../Heading";

export function CardTitle({ children }: PropsWithChildren): ReactNode {
  return (
    <Heading
      className="mb-2 border-b border-b-emerald-900 pb-2 text-center dark:border-b-emerald-100"
      level={2}
    >
      {children}
    </Heading>
  );
}
