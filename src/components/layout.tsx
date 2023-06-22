import Head from 'next/head';
import { ReactNode } from 'react';

export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    children: ReactNode
    home: Boolean
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Barber-shop website"
        />
      </Head>
      <header>
      </header>
      <main>{children}</main>
    </div>
  );
}