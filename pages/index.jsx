import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './Layout';
import HomeMain from './HomeMain';
import Loading from './components/Loading';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.youtube.slogive.xyz/videos', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(true))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Head>
        <title>YouTube | Inicio</title>
      </Head>

      <Layout>{loading ? <HomeMain></HomeMain> : <Loading />}</Layout>
    </>
  );
}

export default Home;
