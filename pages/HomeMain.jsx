import React, { useState, useEffect } from 'react';
import VideoElement from './components/VideoElement';
import styles from '../styles/HomeMain.module.css';

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
      {data?.map((item) => (
        <VideoElement key={item.id} {...item}></VideoElement>
      ))}
    </main>
  );
}

export default HomeMain;
