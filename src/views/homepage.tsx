import Image from 'next/image';

import { imgHeroBanner } from '@/assets';

export default function Homepage() {
  const content = {
    hero: {
      title: `Travaillez intelligemment, collaborez partout`,
    },
    assurances: {
      title: `Pourquoi choisir WorkSphere ?`,
      cards: [
        { title: `Productivité maximale`, description: `Un espace de travail optimisé sans distractions.` },
        { title: `Collaboration facile`, description: `Des outils intuitifs pour travailler en équipe.` },
        { title: `Sécurité garantie`, description: `Données protégées avec un chiffrement avancé.` },
        { title: `Accessible partout`, description: `Compatible avec tous vos appareils, sans limites.` },
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
      <section id="hero-section" className="relative">
        <h1>{content.hero.title}</h1>
        <Image src={imgHeroBanner} alt="Personne qui travaille sur son ordinateur" fill className="absolute -z-10" />
      </section>

      <section id="assurances-section" className="">
        <h2>{content.assurances.title}</h2>
        <div id="cards">
          {content.assurances.cards.map((card, index) => (
            <article key={`assurance-${index}`}>
              {/* Img absolute */}
              <div id="content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools-section" className="bg-background-muted">
        <div id="cards">
          <article>
            <h2>{content.tools.title}</h2>
            <p>{content.tools.description}</p>

            {content.tools.cards.map((card, index) => (
              <article key={`tools-${index}`}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </article>
        </div>
      </section>

      {/* <Link href="" title="" aria-label="" /> */}
    </>
  );
}
