interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
}

export default function SectionMain({ title, id, children }: Props) {
  return (
    <section id={id} className="container__block space-y-8 py-10 md:py-20">
      <h2 className="title__section">{title}</h2>
      {children}
    </section>
  );
}
