import type { PropsWithChildren, ReactNode } from "react";

import { Link } from "react-router";

export function InAppLink({
  children,
  to,
}: PropsWithChildren<{ to: string }>): ReactNode {
  return (
    <Link className="text-orange-800 underline dark:text-orange-200" to={to}>
      {children}
    </Link>
  );
}
