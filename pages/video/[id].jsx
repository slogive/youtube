import react, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import Header from '../Header';
import PlaySection from '../PlaySection';
import Layout from '../Layout';

function Video() {
  const router = useRouter();
  const { id } = router.query; // Destructuring our router object

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.youtube.slogive.xyz/videos', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((items) => setData(items))
      .then(() => setLoading(true));
  }, []);

  const dataitem = loading ? data[id - 1] : '';

  return (
    <>
      <Head>
        <title>Youtube | Video</title>
      </Head>
      <Layout>
        {loading ? (
          <PlaySection
            id={dataitem.id}
            hashtag={dataitem.hashtag}
            title={dataitem.title}
            views={dataitem.views}
            date={dataitem.date}
            owner={dataitem.owner}
            ownersubs={dataitem.ownersubs}
            description={dataitem.description}
            ownerpic={dataitem.ownerpic}
          ></PlaySection>
        ) : (
          ''
        )}
      </Layout>
    </>
  );
}

export default Video;
