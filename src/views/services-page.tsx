import Link from 'next/link';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';

import SectionMain from '@/components/sections/section-main';
import { cn } from '@/libs/tailwind';
import { routesList } from '@/routes/routes';

export default function ServicesPage() {
  const content = {
    plansSection: {
      title: 'Tarifs',
      plans: [
        {
          tag: `basic`,
          cost: `$15/mo`,
          target: `Pour les indépendants.`,
          advantages: [
            `Accès aux outils essentiels`,
            `Messagerie instantanée`,
            `Stockage limité`,
            `Support standard`,
            `Accès mobile`,
          ],
          cta: { label: `Démarrer`, pathname: `${routesList.services.pathname}/basic` },
        },
        {
          tag: `pro`,
          cost: `$25/mo`,
          target: `Pour les équipes en croissance.`,
          advantages: [
            `Réunions vidéos HD`,
            `Partage de fichiers illimités`,
            `Intégrations avancées`,
            `Sécurité renforcée`,
            `Assistance prioritaire`,
          ],
          cta: { label: `Démarrer`, pathname: `${routesList.services.pathname}/basic` },
        },
        {
          tag: `elite`,
          cost: `$30/mo`,
          target: `Expérience ultime`,
          advantages: [
            `Espaces personnalisables`,
            `Intelligence artificielle`,
            `Collaboration avancée`,
            `Accès VIP`,
            `Support 24/7`,
          ],
          cta: { label: `Démarrer`, pathname: `${routesList.services.pathname}/basic` },
        },
      ],
    },
  };

  return (
    <>
      <SectionMain id={`plans-section`} title={content.plansSection.title}>
        <div id="cards-grid" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.plansSection.plans.map(plan => (
            <article
              key={`plan-${plan.tag}`}
              className={cn(
                'flex w-full flex-col justify-start rounded-xl border border-border p-8',
                plan.tag === 'pro' ? 'bg-primary text-foreground-reversed' : 'bg-background'
              )}
            >
              <p className={cn('tag', plan.tag === 'pro' ? 'bg-white text-primary' : '')}>{plan.tag}</p>

              <div id="" className="mt-3 mb-5 grow space-y-4">
                <h3
                  className={cn(
                    'title__card text-4xl',
                    plan.tag === 'pro' ? 'text-foreground-reversed' : 'text-foreground-titles'
                  )}
                >
                  {plan.cost}
                </h3>
                <p className="text-sm">{plan.target}</p>
                <ul className="space-y-2">
                  {plan.advantages.map((advantage, index) => (
                    <li key={`advantage-${index}`} className="flex flex-row items-start gap-2">
                      <IoIosCheckmarkCircleOutline
                        className={cn(
                          'size-5 min-w-fit',
                          plan.tag === 'pro' ? 'text-foreground-reversed' : 'text-primary'
                        )}
                      ></IoIosCheckmarkCircleOutline>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.cta.pathname}
                className={cn(
                  'cta flex flex-row items-center justify-center gap-4',
                  plan.tag === 'pro' ? 'hover:bg-accent' : ''
                )}
              >
                {plan.cta.label}
                <MdOutlineArrowOutward className="size-5"></MdOutlineArrowOutward>
              </Link>
            </article>
          ))}
        </div>
      </SectionMain>
    </>
  );
}
