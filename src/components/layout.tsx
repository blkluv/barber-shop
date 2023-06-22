import Head from 'next/head';
import { ReactNode, useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Navbar from './Navbar/navbar';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode
  home: Boolean
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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