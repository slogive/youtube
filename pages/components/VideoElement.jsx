import React, { useState } from 'react';
import styles from '../../styles/VideoElement.module.css';
import moment from 'moment';
import Link from 'next/link';

function VideoElement({
  id,
  title,
  owner,
  views,
  date,
  url,
  ownerpic,
  ownersubs,
}) {
  let videoTitleData = title;
  const serverStorage = 'https://youtube.slogive.xyz/';
  const imagePreview = 'server/thumbnails/' + id + '.jpg';

  if (videoTitleData.length >= 50) {
    videoTitleData = videoTitleData.slice(0, 50) + '...';
  } else if (videoTitleData.length <= 50) {
    videoTitleData = videoTitleData;
  }

  return (
    <Link href={`video/${id}`} passHref>
      <div className={styles.Container}>
        <img
          className={styles.Image}
          src={`${serverStorage}${imagePreview}`}
          alt={`Thumbnail ${owner}`}
          draggable='false'
        />
        <div className={styles.Data}>
          <img
            className={styles.ProfileImage}
            src={`${serverStorage}src/${ownerpic}`}
            alt=''
            draggable='false'
          />
          <div className={styles.DataGrid}>
            <span className={styles.Title}>{videoTitleData}</span>
            <span className={styles.Owner}>{owner}</span>
            <div>
              <span className={styles.Views}>
                {views.toLocaleString()} vistas &nbsp; &bull; &nbsp;{' '}
                {moment(date).format('D MMM[.] YYYY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoElement;
