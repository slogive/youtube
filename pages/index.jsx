import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Link from 'next/link';
import Layout from './Layout';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch('https://api.youtube.slogive.xyz/videos', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(true));

    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <Head>
        <title>YouTube | Inicio</title>
      </Head>

      <Layout></Layout>
    </>
  );
}

export default Home;
