import { Url } from 'next/dist/shared/lib/router/router';

interface IRoute {
  label: string;
  pathname: Url;
}

export const navMenuRoutes: IRoute[] = [
  {
    label: 'Accueil',
    pathname: '/',
  },
  {
    label: 'À Propos',
    pathname: '/about',
  },
  {
    label: 'Nos services',
    pathname: '/services',
  },
  {
    label: 'Communauté',
    pathname: '/community',
  },
];
