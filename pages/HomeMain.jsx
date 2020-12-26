import React, { useState, useEffect } from 'react';
import VideoElement from './components/VideoElement';
import styles from '../styles/HomeMain.module.css';
import Loading from './components/Loading';

function HomeMain() {
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
    <main className={styles.Container}>
      {loading ? (
        data?.map((item, i) => (
          <VideoElement
            key={i}
            titleEdited={item.title.slice(0, 50) + '...'}
            viewsEdited={item.views.toLocaleString()}
            {...item}
          ></VideoElement>
        ))
      ) : (
        <Loading></Loading>
      )}
    </main>
  );
}

export default HomeMain;
