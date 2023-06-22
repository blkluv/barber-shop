import Head from 'next/head';

import Layout from 'components/layout';


export default function Home(): React.JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>Barber Shop Website</title>
      </Head>
    </Layout>
  );
}