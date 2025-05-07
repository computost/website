import type { PropsWithChildren, ReactNode } from "react";

export function ExternalLink({ children, href }: ExternalLinkProps): ReactNode {
  return (
    <a className="text-emerald-800 underline dark:text-orange-200" href={href}>
      {children}
    </a>
  );
}

type ExternalLinkProps = PropsWithChildren<{
  href: string;
}>;
