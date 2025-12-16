import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export default function CustomLink({
  to,
  children,
  external,
  className,
  ...rest
}: CustomLinkProps) {
  const location = useLocation();

  const isSamePage = !external && location.pathname === to;

  return (
    <Link
      to={to}
      target={isSamePage ? undefined : '_blank'}
      rel={isSamePage ? undefined : 'noopener noreferrer'}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
