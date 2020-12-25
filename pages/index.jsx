import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Link from 'next/link';
import Layout from './Layout';
import HomeMain from './HomeMain';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        fetch('https://api.youtube.slogive.xyz/videos', {
          mode: 'cors',
        })
          .then((response) => response.json())
          .then((data) => setData(data))
          .then(() => setLoading(true));
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      console.log('API Unmounted');
    };
  }, []);

  return (
    <>
      <Head>
        <title>YouTube | Inicio</title>
      </Head>

      {loading ? (
        <Layout>
          <HomeMain></HomeMain>
        </Layout>
      ) : (
        'Loading data from API'
      )}
    </>
  );
}

export default Home;
