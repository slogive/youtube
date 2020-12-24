import Head from 'next/head';
import React from 'react';
import Header from '../Header';

function index() {
  return (
    <>
      <Head>
        <title>Youtube | Buscar</title>
      </Head>

      <Header></Header>
      <div>
        <h1>Search</h1>
      </div>
    </>
  );
}

export default index;
