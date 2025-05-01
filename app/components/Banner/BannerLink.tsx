import type { PropsWithChildren, ReactNode } from "react";

import { Link } from "react-router";

export function BannerLink({
  children,
  to,
}: PropsWithChildren<{ to: string }>): ReactNode {
  return <Link to={to}>{children}</Link>;
}
