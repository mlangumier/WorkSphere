import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

import { navMenuRoutes } from '../nav-menu-routes';

export default function Footer() {
  const content = {
    cta: {
      description: `Travaillez plus intelligemment, collaborez plus efficacement. Essayez WorkSphere maintenant !`,
      btn: 'Démarrer',
    },
    copyright: '© 2025 - WorkSphere',
    links: {
      title: 'Pages',
    },
    identity: {
      title: 'Contacts',
      email: 'hello@logoipsum.com',
      address: {
        street: '190 Lorem Ipsum',
        city: 'Lyon 69000',
      },
    },
  };

  return (
    <footer className="w-full bg-primary py-8 text-foreground-reversed">
      <div className="container mx-auto space-y-10 max-xl:px-4">
        <div id="top" className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div id="cta" className="max-w-md space-y-6">
            <p>{content.cta.description}</p>
            <Link href={'/tarifs'} className="cta">
              {content.cta.btn}
            </Link>
          </div>

          <div id="identity" className="flex grow flex-col justify-end gap-5 md:flex-row md:gap-20">
            <div id="pages" className="space-y-2">
              <h3 className="title__footer__col">{content.links.title}</h3>
              <ul className="space-y-2">
                {navMenuRoutes.map((route, index) => (
                  <li key={`route-${index}`}>
                    <Link href={route.pathname}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div id="contacts" className="space-y-2">
              <h3 className="title__footer__col">{content.identity.title}</h3>
              <ul className="space-y-2">
                <li>{content.identity.email}</li>
                <li>{content.identity.address.street}</li>
                <li>{content.identity.address.city}</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="bottom" className="flex flex-row items-center justify-between">
          <p>{content.copyright}</p>
          <div id="socials" className="flex flex-row items-center gap-4">
            <FaFacebook className="size-5"></FaFacebook>
            <FaInstagram className="size-5"></FaInstagram>
            <SiMinutemailer className="size-5"></SiMinutemailer>
          </div>
        </div>
      </div>
    </footer>
  );
}
