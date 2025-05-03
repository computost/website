import type { PropsWithChildren, ReactNode } from "react";

import { Link } from "react-router";

export function InAppLink({
  children,
  to,
}: PropsWithChildren<{ to: string }>): ReactNode {
  return (
    <Link className="text-emerald-800 underline dark:text-emerald-300" to={to}>
      {children}
    </Link>
  );
}
