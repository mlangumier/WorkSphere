import Image from 'next/image';

import { imgComputerGrass, imgHeroBanner, imgOfficeCollaboration, imgOfficeLearning, imgOfficeReunion } from '@/assets';
import SectionMain from '@/components/sections/section-main';
import { cn } from '@/libs/tailwind';

export default function Homepage() {
  const content = {
    hero: {
      title: `Travaillez intelligemment, collaborez partout`,
    },
    assurances: {
      title: `Pourquoi choisir WorkSphere ?`,
      cards: [
        {
          title: `Productivité maximale`,
          description: `Un espace de travail optimisé sans distractions.`,
          image: imgOfficeLearning,
        },
        {
          title: `Collaboration facile`,
          description: `Des outils intuitifs pour travailler en équipe.`,
          image: imgOfficeCollaboration,
        },
        {
          title: `Sécurité garantie`,
          description: `Données protégées avec un chiffrement avancé.`,
          image: imgOfficeReunion,
        },
        {
          title: `Accessible partout`,
          description: `Compatible avec tous vos appareils, sans limites.`,
          image: imgComputerGrass,
        },
      ],
    },
    tools: {
      title: `Outils essentiels`,
      description: `Des fonctionnalités conçues pour améliorer votre efficacité et simplifier votre quotidien. Profitez d'un espace de travail optimisé pour mieux organiser vos tâches et collaborer sans effort.`,
      cards: [
        {
          title: `Agenda intelligent`,
          description: `Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive.`,
        },
        {
          title: `Outils de productivité`,
          description: `Connectez facilement vos applications préférées pour un flux de travail optimisé et sans interruptions.`,
        },
        {
          title: `Communication fluide`,
          description: `Discutez avec vos collègues en temps réel via chat, messagerie et appels vidéo haute qualité.`,
        },
        {
          title: `Tableaux de bord`,
          description: `Visualisez l'évolution de vos projets avec des graphiques et statistiques détaillés.`,
        },
        {
          title: `Partage facile`,
          description: `Partagez rapidement vos fichiers en toute sécurité et travaillez en équipe sur des documents partagés.`,
        },
      ],
    },
  };

  return (
    <>
      <section
        id="hero-section"
        className="container__block first__section gradient__section relative my-4 flex max-h-[32rem] items-center justify-center overflow-clip rounded-lg"
      >
        <Image
          src={imgHeroBanner}
          alt="Personne qui travaille sur son ordinateur"
          fill
          className="absolute -z-10 object-cover"
        />

        <h1 className="max-w-sm text-center title__main">{content.hero.title}</h1>
      </section>

      <SectionMain id={`assurances-section`} title={content.assurances.title}>
        <div id="cards-grid" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.assurances.cards.map((card, index) => (
            <article
              key={`assurance-${index}`}
              className="gradient__card relative h-[24rem] overflow-clip rounded-lg p-5 text-foreground-reversed lg:h-[30rem]"
            >
              <Image src={card.image} alt="" fill className="absolute -z-10 object-cover" />
              <div id="content" className="space-y-4">
                <h3 className="title__card">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionMain>

      <section id="tools-section" className="w-full bg-background-muted py-10 md:py-20">
        <div id="cards-grid" className="container__block grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <article className="space-y-8 py-5">
            <h2 className="title__section">{content.tools.title}</h2>
            <p>{content.tools.description}</p>
          </article>
          {content.tools.cards.map((card, index) => (
            <article
              key={`tools-${index}`}
              className="group space-y-4 rounded-lg bg-background p-5 transition-colors duration-300 ease-out hover:bg-primary active:bg-primary"
            >
              <p className="font-sans text-5xl font-extrabold text-primary transition-colors duration-300 ease-out group-hover:text-foreground-reversed group-active:text-foreground-reversed">{`${index + 1 >= 10 ? '' : '0'}${index + 1}`}</p>
              <div id="content" className="space-y-2">
                <h3 className="title__card transition-colors duration-300 ease-out group-hover:text-foreground-reversed group-active:text-foreground-reversed">
                  {card.title}
                </h3>
                <p className="transition-colors duration-300 ease-out group-hover:text-foreground-reversed group-active:text-foreground-reversed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
