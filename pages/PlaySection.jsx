import React, { useState, useReducer, useEffect } from 'react';
import Head from 'next/head';
import moment from 'moment';

import VideoElement from './components/VideoElement';

import styles from '../styles/PlaySection.module.css';

function PlaySection(props) {
  const serverStorage = 'https://youtube.slogive.xyz/';

  const [showMore, setShowMore] = useReducer((showMore) => !showMore);

  const {
    id,
    hashtag,
    title,
    views,
    date,
    owner,
    ownersubs,
    description,
    ownerpic,
  } = props;

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
      <Head>Youtube | {title}</Head>

      <div className={styles.Main}>
        <div className={styles.Container}>
          <section className={styles.Player}>
            <div className={styles.VideoPlayer}>
              <video
                type='video/mp4'
                autoPlay={true}
                src={`${serverStorage}server/videos/encoded/${id}.mp4`}
                controls
              />
            </div>
            <section style={{ display: 'grid' }}>
              <div className={styles.VideoInfo}>
                {hashtag ? (
                  <span className={styles.Hashtags}>{hashtag}</span>
                ) : (
                  ''
                )}
                <section>
                  <div className={styles.VideoTitle}>
                    <span>{title}</span>
                  </div>
                  <section className={styles.VideoMetaContainer}>
                    <div className={styles.VideoMeta}>
                      <span>
                        {views.toLocaleString()} vistas &nbsp; &bull; &nbsp;{' '}
                        {moment(date).format('D MMM[.] YYYY')}
                      </span>
                    </div>
                    <div className={styles.VideoPops}>
                      <div>
                        <svg
                          viewBox='0 0 24 24'
                          preserveAspectRatio='xMidYMid meet'
                          focusable='false'
                        >
                          <g>
                            <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path>
                          </g>
                        </svg>
                        <span>Like</span>
                      </div>
                      <div>
                        <svg
                          viewBox='0 0 24 24'
                          preserveAspectRatio='xMidYMid meet'
                          focusable='false'
                        >
                          <g>
                            <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'></path>
                          </g>
                        </svg>
                        <span>Dislikes</span>
                      </div>
                    </div>
                    <div className={styles.VideoShare}>
                      <svg
                        viewBox='0 0 24 24'
                        preserveAspectRatio='xMidYMid meet'
                        focusable='false'
                      >
                        <g mirror-in-rtl=''>
                          <path d='M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z'></path>
                        </g>
                      </svg>
                      <span>Compartir</span>
                    </div>
                    <div className={styles.VideoSave}>
                      <svg
                        viewBox='0 0 24 24'
                        preserveAspectRatio='xMidYMid meet'
                        focusable='false'
                      >
                        <g>
                          <path d='M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z'></path>
                        </g>
                      </svg>
                      <span>Guardar</span>
                    </div>
                    <div className={styles.VideoOptions}>
                      <svg
                        viewBox='0 0 24 24'
                        preserveAspectRatio='xMidYMid meet'
                        focusable='false'
                      >
                        <g>
                          <circle cx='5' cy='12' r='2'></circle>
                          <circle cx='12' cy='12' r='2'></circle>
                          <circle cx='19' cy='12' r='2'></circle>
                        </g>
                      </svg>
                    </div>
                  </section>
                </section>
              </div>

              <div className={styles.DataGrid}>
                <div className={styles.ProfilePic}>
                  <img
                    src={`${serverStorage}src/${ownerpic}`}
                    alt={`${owner} Profile Picture}`}
                  />
                </div>
                <div>
                  <div
                    className={styles.showData}
                    style={showMore ? {} : { maxHeight: '150px' }}
                  >
                    <div className={styles.ProfilePicMB}>
                      <img
                        src={`${serverStorage}src/${ownerpic}`}
                        alt={`${owner} Profile Picture}`}
                      />
                    </div>
                    <div className={styles.videoTitles}>
                      <div style={{ display: 'grid' }}>
                        <span className={styles.ProfileTitle}>{owner}</span>
                        <span className={styles.ProfileSubsCount}>
                          {ownersubs}
                        </span>
                      </div>
                      <span className={styles.ProfileSub}>Suscribirse</span>
                    </div>
                    <p className={styles.videoDesc}>{description}</p>
                  </div>
                  <div className={styles.ShowMore}>
                    <button onClick={setShowMore}>
                      {showMore ? 'Mostrar menos' : 'Mostrar mas'}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <div className={styles.Recomendations}>
            {data?.reverse().map((item) => (
              <VideoElement key={item.id} {...item}></VideoElement>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaySection;
