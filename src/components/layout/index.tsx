import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main className="container mx-auto">{children}</main>

      <Footer />
    </>
  );
}
