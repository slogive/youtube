import React from 'react';
import styles from './styles/VideoRecommendations.module.css';

function VideoRecommendation(props) {
  let videoTitleData = props.titleForTest;

  let viewsCount = 102002;

  if (viewsCount >= 1000 || viewsCount < 1000000) {
    viewsCount =
      Math.sign(viewsCount) * (Math.abs(viewsCount) / 1000).toFixed(1) + 'k';
  }

  const serverStorage = 'https://youtube.slogive.xyz/src/';
  const imagePreview = 'preview-image.png';

  if (videoTitleData.length >= 30) {
    videoTitleData = videoTitleData.slice(0, 30) + '...';
  } else if (videoTitleData.length <= 29) {
    videoTitleData = videoTitleData;
  }

  return (
    <div className={styles.Container}>
      <img
        className={styles.Image}
        src={`${serverStorage}${imagePreview}`}
        alt='Preview'
      />
      <div className={styles.DataGrid}>
        <span className={styles.Title}>{videoTitleData}</span>
        <span className={styles.Owner}>Slogive</span>
        <div>
          <span className={styles.Views}>
            {viewsCount + ' vistas'}&nbsp; &bull; &nbsp;{'11/11/11'}
          </span>

          <span className={styles.Date}></span>
        </div>
      </div>
    </div>
  );
}

export default VideoRecommendation;
