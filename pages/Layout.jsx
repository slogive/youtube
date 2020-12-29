import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import VideoElement from './components/VideoElement';

function Layout({ children, searchValue, searchStatus }) {
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

  const files = searchStatus
    ? loading
      ? data.filter((item) =>
          item.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(
              searchValue
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            )
        )
      : null
    : null;

  return (
    <>
      <Header></Header>
      <main className={styles.Main}>
        <Navbar></Navbar>
        {searchStatus ? (
          <div className={styles.Children}>
            <div className={styles.BuscarContainer}>
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
              <div className={styles.BuscarSecondContainer}>
                {files.map((item) => (
                  <VideoElement
                    key={item.id}
                    titleEdited={item.title.slice(0, 50) + '...'}
                    viewsEdited={item.views.toLocaleString()}
                    {...item}
                  ></VideoElement>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.Children}>{children}</div>
        )}
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
  searchStatus: state.searchStatus,
});

export default connect(mapStateToProps)(Layout);
