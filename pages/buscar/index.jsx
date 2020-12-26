import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import Layout from '../Layout';
import Loading from '../components/Loading';
import VideoElement from '../components/VideoElement';

import styles from '../../styles/HomeMain.module.css';

const mapStateToProps = (state) => ({
  searchStatus: state.searchStatus,
});

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
    : null;

  return (
    <>
      <Head>
        <title>YouTube | Buscar</title>
      </Head>
      <div className={styles.BuscarContainer}>
        <div className={styles.BuscarContainerChild}>
          <Layout>
            <div>
              <div className={styles.Filter}>
                <svg
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g>
                    <path d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'></path>
                  </g>
                </svg>
                <span>Filtrar</span>
              </div>
              {loading ? (
                <main className={styles.Container}>
                  {files.map((item) => (
                    <VideoElement key={item.id} {...item}></VideoElement>
                  ))}
                </main>
              ) : (
                <Loading />
              )}
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Search);
