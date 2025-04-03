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
        'transition-all duration-150 ease-in-out hover:underline active:text-accent',
        pathname === href ? 'underline' : ''
      )}
      {...rest}
    >
      {label.toUpperCase()}
    </Link>
  );
}
