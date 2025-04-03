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
    <footer className="w-full bg-primary py-5 text-foreground-reversed">
      <div className="container mx-auto space-y-10 max-xl:px-4">
        <div id="top" className="flex flex-col gap-4">
          <div id="cta" className="space-y-4">
            <p>{content.cta.description}</p>
            <Link href={'/tarifs'} className="cta">
              {content.cta.btn}
            </Link>
          </div>

          <div id="identity">
            <div id="pages">
              <h3>{content.links.title}</h3>
              <ul>
                {navMenuRoutes.map((route, index) => (
                  <li key={`route-${index}`}>
                    <Link href={route.pathname}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div id="contacts">
              <h3>{content.identity.title}</h3>
              <ul>
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
