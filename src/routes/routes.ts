import { Url } from 'next/dist/shared/lib/router/router';

export interface IRoute {
  label: string;
  pathname: Url;
}

export interface IRoutesList {
  // [key: string]: IRoute;
  home: IRoute;
  about: IRoute;
  services: IRoute;
  community: IRoute;
  plans: IRoute;
}

export const routesList: IRoutesList = {
  home: {
    label: 'Accueil',
    pathname: '/',
  },
  about: {
    label: 'À Propos',
    pathname: '/a-propos',
  },
  services: {
    label: 'Nos services',
    pathname: '/services',
  },
  community: {
    label: 'Communauté',
    pathname: '/communaute',
  },
  plans: {
    label: 'Tarifs',
    pathname: '/tarifs',
  },
};
