import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';

import { navMenuRoutes } from '@/components/layout/nav-menu-routes';

import HeaderNavLink from './header-nav-link';

export default function Header() {
  return (
    <header className="w-full bg-background-reversed py-4 text-foreground-reversed">
      <div className="container mx-auto flex flex-row items-center justify-between max-xl:px-4">
        <div id="identity">
          <Link href="/" title={`Vers la page d'accueil`}>
            WorkSphere
          </Link>
        </div>

        <button
          type="button"
          className="transition-colors duration-150 ease-in-out hover:cursor-pointer hover:text-accent max-md:block md:hidden"
          title="Ouvrir le menu de navigation"
        >
          <CiMenuBurger className="size-5"></CiMenuBurger>
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-4 md:flex-row md:items-center">
            {navMenuRoutes.map((route, index) => (
              <li key={`route-${index}`}>
                <HeaderNavLink href={route.pathname} label={route.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
