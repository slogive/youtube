import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import Loading from '../components/Loading';
import VideoElement from '../components/VideoElement';
import styles from '../../styles/HomeMain.module.css';

function Search({ searchStatus }) {
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

  const files = loading
    ? data.filter((item) =>
        item.title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchStatus
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          )
      )
    : '';

  return (
    <div>
      <Layout>
        {loading ? (
          <main className={styles.Container} style={{ transition: 'all 3s' }}>
            {files.map((item) => (
              <VideoElement key={item.id} {...item}></VideoElement>
            ))}
          </main>
        ) : (
          <Loading />
        )}
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchStatus: state.searchStatus,
});

export default connect(mapStateToProps)(Search);
