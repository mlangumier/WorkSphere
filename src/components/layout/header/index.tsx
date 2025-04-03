import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';

import { navMenuRoutes } from '@/components/layout/nav-menu-routes';

export default function Header() {
  return (
    <header className="w-full bg-background-reversed py-4 text-foreground-reversed">
      <div className="container mx-auto flex flex-row items-center justify-between max-xl:px-4">
        <div id="identity">
          <Link href="/" title={`Vers la page d'accueil`}>
            WorkSphere
          </Link>
        </div>

        <button type="button" className="max-md:block md:hidden" title="Ouvrir le menu de navigation">
          <CiMenuBurger className="size-5"></CiMenuBurger>
        </button>

        <nav className="hidden md:flex">
          <ul>
            {navMenuRoutes.map((route, index) => (
              <li key={`route-${index}`}>
                <Link href={route.pathname}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
