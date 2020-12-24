import react, { useState } from 'react';
import Head from 'next/head';
import React from 'react';
import Header from '../Header';

import styles from '../../styles/pages/Settings.module.css';

function Settings() {
  const [data, setData] = useState(null);
  fetch('https://api.youtube.slogive.xyz/videos', {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((items) => setData(items));
  return (
    <>
      <Head>
        <title>Youtube | Configuración</title>
      </Head>
      <Header></Header>

      <div className={styles.TableContainer}>
        <table border='true' className={styles.Table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Views</th>
              <th>Date</th>
              <th>URL</th>
              <th>Owner Pic</th>
              <th>Owner Sub Count</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, i) => (
              <tr key={i}>
                <td>
                  <span>{item.id}</span>
                </td>
                <td role='title'>
                  <input value={item.title} readOnly></input>
                </td>
                <td>
                  <span>{item.owner}</span>
                </td>
                <td>
                  <span>{item.views}</span>
                </td>
                <td>
                  <input
                    type='date'
                    defaultValue={item.date.slice(0, 10)}
                  ></input>
                </td>
                <td>
                  <a href={item.url}>{item.url}</a>
                </td>
                <td>
                  <span>{item.ownerpic}</span>
                </td>
                <td>
                  <span>{item.ownersubs}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Settings;
