import React, { useState } from 'react';
import styles from '../../styles/VideoElement.module.css';

function VideoElement(props) {
  //   const videoTitle = 'Video de prueba que se';
  //   const videoTitle =
  //     'Video de prueba que se fundamente en funcionar con acortador de caracteres para que ningun nombre sea mas grande de los permitido aunque se cargue una description';
  let videoTitleData = props.titleForTest;
  const viewsCount = '102002';
  const serverStorage = 'https://youtube.slogive.xyz/src/';
  const imagePreview = 'preview-image.png';

  if (videoTitleData.length >= 50) {
    videoTitleData = videoTitleData.slice(0, 50) + '...';
  } else if (videoTitleData.length <= 50) {
    videoTitleData = videoTitleData;
  }

  //  console.log(typeof videoTitle);
  //   console.log(videoTitle.length);

  return (
    <div className={styles.Container}>
      <img
        className={styles.Image}
        src={`${serverStorage}${imagePreview}`}
        alt='Preview'
      />
      <div className={styles.Data}>
        <img
          className={styles.ProfileImage}
          src={`${serverStorage}channel-profile.jpg`}
          alt=''
          draggable='false'
        />
        <div className={styles.DataGrid}>
          <span className={styles.Title}>{videoTitleData}</span>
          <span className={styles.Owner}>Slogive</span>
          <div>
            <span className={styles.Views}>{`${viewsCount} vistas`}</span>
            &nbsp; &bull; &nbsp;
            <span className={styles.Date}>11/11/11</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoElement;
