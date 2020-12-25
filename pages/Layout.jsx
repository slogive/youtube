import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main className={styles.Main}>
        <Navbar></Navbar>
        <div className={styles.Children}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
