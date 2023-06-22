import Head from 'next/head';
import { useRef } from 'react';


import Layout from 'components/layout';
import Hero from 'components/hero';

export default function Home(): React.JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout home>
      <Head>
        <title>Barber Shop Website</title>
      </Head>
      <Hero handleClick={handleClick} />
    </Layout>
  );
}