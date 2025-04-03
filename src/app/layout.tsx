import type { Metadata } from 'next';
import '../styles/globals.css';

import { Poppins, Roboto } from 'next/font/google';

import Layout from '@/components/layout';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WorkSphere',
  description: 'La solution parfaite pour optimiser votre productivité grâce à nos outils de travail collaboratif.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
