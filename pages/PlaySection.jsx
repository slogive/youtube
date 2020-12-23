import React, { useState, useReducer } from 'react';
import styles from '../styles/PlaySection.module.css';
import VideoElement from './components/VideoElement';
import VideoRecommendation from './components/VideoRecommendation';

function PlaySection() {
  const serverStorage = 'https://youtube.slogive.xyz/src/';
  const imagePreview = 'preview-image.png';

  const [showMore, setShowMore] = useReducer((showMore) => !showMore);
  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <section className={styles.Player}>
          <img src={`${serverStorage}${imagePreview}`} alt='' />
          <section style={{ display: 'grid' }}>
            <div className={styles.VideoInfo}>
              <span className={styles.Hashtags}>#10 EN TENDENCIAS</span>
              <section>
                <span className={styles.VideoTitle}>
                  Agujeros de Guión: PIRATAS DEL CARIBE 3: En el fin del mundo
                  (2/2) (Errores, review, resumen)
                </span>
                <section className={styles.VideoMetaContainer}>
                  <div className={styles.VideoMeta}>
                    <span>Video Views &nbsp; &bull; &nbsp; Video Date</span>
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
                  <div>
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

            <hr style={{ width: '100%', border: 'solid 1px gray' }}></hr>

            <div className={styles.DataGrid}>
              <div className={styles.ProfilePic}>
                <img
                  src={`${serverStorage}channel-profile.jpg`}
                  alt='Profile Pic'
                />
              </div>
              <div>
                <div
                  className={styles.showData}
                  style={showMore ? {} : { maxHeight: '150px' }}
                >
                  <div className={styles.videoTitles}>
                    <div style={{ display: 'grid' }}>
                      <span className={styles.ProfileTitle}>Channel Title</span>
                      <span className={styles.ProfileSubsCount}>
                        Channel Subs
                      </span>
                    </div>
                    <span className={styles.ProfileSub}>Suscribirse</span>
                  </div>
                  <p className={styles.videoDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, perferendis aut iure error hic consequatur nisi
                    odio quaerat, quasi itaque architecto eum beatae
                    consequuntur recusandae possimus accusantium ad nulla fugit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda incidunt facere voluptate aperiam repellendus
                    laudantium totam distinctio quia fuga ad et, veniam dolor
                    ducimus blanditiis quae a tempora animi ex? Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Accusantium
                    dolores eum id ex accusamus sed enim consequuntur maxime,
                    molestiae ab obcaecati tempore alias asperiores temporibus
                    magnam quae impedit. Ullam, optio? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eaque, eveniet! Corporis
                    error illo blanditiis magni molestiae esse praesentium nemo,
                    quam quos, quia fuga voluptas est perspiciatis. Vitae omnis
                    sed amet? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In adipisci cumque voluptatibus, aut repudiandae ipsum
                    facere quod ipsa nam veniam est exercitationem id
                    perferendis unde deserunt pariatur, aperiam incidunt quia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat doloremque harum facilis alias perspiciatis
                    possimus, a culpa delectus ipsa iste exercitationem at
                    numquam animi qui officiis repellat autem in. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Est hic sit
                    quo harum facilis ipsum optio laborum officiis ea dolores
                    qui iusto, dolore aliquam. Dolor odio neque quibusdam
                    possimus blanditiis? Vero veritatis suscipit labore nobis
                    voluptatibus recusandae non sapiente temporibus ut obcaecati
                    possimus soluta accusamus deleniti quisquam, quibusdam,
                    earum nulla asperiores ipsum. Veniam numquam eum, inventore
                    voluptas possimus harum eos. Optio quos distinctio saepe
                    fuga deserunt nihil? Asperiores id quos pariatur ipsa
                    temporibus impedit laborum, nihil atque earum! Accusamus
                    modi voluptas dolorum iste est fuga molestiae, earum id.
                    Iusto, sapiente. Eum, nemo repellat nostrum voluptatibus
                    omnis pariatur modi sapiente eveniet nam vitae? Ducimus,
                    eius sint. Veritatis eum, accusantium illo pariatur
                    voluptate ad porro molestias, voluptatum itaque modi
                    asperiores, harum cumque! Corporis ipsum sequi odio omnis
                    iusto, quas ducimus assumenda quae, eum molestiae similique
                    voluptatibus officia ea id facilis corrupti laudantium
                    illum, possimus eaque culpa! Nostrum in officia tenetur
                    magnam dolorem.
                  </p>
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
          <VideoRecommendation titleForTest='Video de prueba que se fundamente en funcionar con acortador de caracteres para que ningun nombre sea mas grande de los permitido aunque se cargue una description'></VideoRecommendation>
        </div>
      </div>
      <section recomendations></section>
    </div>
  );
}

export default PlaySection;
