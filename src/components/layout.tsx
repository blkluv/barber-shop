import Head from 'next/head';
import { ReactNode } from 'react';

import Navbar from './Navbar/navbar';

interface LayoutProps {
  children: ReactNode
  home: Boolean
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Barber-shop website"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}