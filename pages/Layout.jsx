import React, { useReducer } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

function Layout(props) {
  return (
    <>
      <Header></Header>
      <main className={styles.Main}>
        <Navbar></Navbar>
        <div className={styles.Children}>{props.children}</div>
      </main>
      {/* <div style={{ padding: '20px' }}>Im a example component</div> */}
    </>
  );
}

export default Layout;
