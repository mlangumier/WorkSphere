import Link from 'next/link';

import { routesList } from '@/routes/routes';

export default function GlobalNotFound() {
  return (
    <>
      <section
        id="not-found"
        className="container__block mx-auto flex h-full flex-col items-center justify-center gap-5 py-20"
      >
        <h2 className="title__section">Page non-trouvée</h2>
        <Link
          href={routesList.home.pathname}
          className="cta border-primary"
          title={`Retourner vers la page: "${routesList.home.label}"`}
        >
          {`Vers l'${routesList.home.label}`}
        </Link>
      </section>
    </>
  );
}
