import type { PropsWithChildren, ReactNode } from "react";

import { Link } from "react-router";

export function BannerLink({
  children,
  to,
}: PropsWithChildren<{ to: string }>): ReactNode {
  return (
    <Link className="text-2xl" to={to}>
      {children}
    </Link>
  );
}
