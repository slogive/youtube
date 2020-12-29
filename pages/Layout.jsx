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
              <div className={styles.Container}>
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
