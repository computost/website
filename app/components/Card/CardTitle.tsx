import type { PropsWithChildren, ReactNode } from "react";

import { Heading } from "../Heading";

export function CardTitle({ children }: PropsWithChildren): ReactNode {
  return (
    <Heading
      className="border-b border-b-[#d0d0d0] pb-2 text-center font-normal text-orange-800 dark:border-b-[#2f2f2f] dark:text-orange-200"
      level={2}
    >
      {children}
    </Heading>
  );
}
