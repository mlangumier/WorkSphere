'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/tailwind';

interface Props extends LinkProps {
  label: string;
}

export default function HeaderNavLink({ label, href, ...rest }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'transition-all duration-150 ease-in-out hover:text-accent hover:underline',
        pathname === href ? 'underline hover:text-inherit' : ''
      )}
      {...rest}
    >
      {label.toUpperCase()}
    </Link>
  );
}
