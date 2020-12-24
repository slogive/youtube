import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Header from './Header';
import HomeMain from './HomeMain';
import Navbar from './Navbar';
import PlaySection from './PlaySection';
import Link from 'next/link';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube Slogive</title>
        <link rel='canonical' href='https://www.youtube.slogive.xyz' />
        <meta
          name='description'
          content='Disfruta los videos y la música que te encantan, sube contenido original y compártelo con tus amigos, familiares y el resto del mundo en YouTube.'
        ></meta>

        {/* Favicon */}
        <link
          rel='shortcut icon'
          href='https://www.youtube.com/s/desktop/f852ec96/img/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='icon'
          href='https://www.youtube.com/s/desktop/f852ec96/img/favicon_32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          href='https://www.youtube.com/s/desktop/f852ec96/img/favicon_48.png'
          sizes='48x48'
        />
        <link
          rel='icon'
          href='https://www.youtube.com/s/desktop/f852ec96/img/favicon_96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          href='https://www.youtube.com/s/desktop/f852ec96/img/favicon_144.png'
          sizes='144x144'
        />

        {/* Social Media */}
        <meta
          property='og:image'
          content='https://www.youtube.com/img/desktop/yt_1200.png'
        />
        <meta property='og:title' content='Youtube' />
        <meta property='og:url' content='https://www.youtube.slogive.xyz' />

        {/* Fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header></Header>

      <Link href='/' title='Home'>
        <h1>Title</h1>
      </Link>
      <Link href='/video' title='Video'>
        <h1>Video</h1>
      </Link>

      <Router>
        <Switch></Switch>
      </Router>
    </>
  );
}

function NotFound() {
  return <h1>404</h1>;
}

function Inicio() {
  return <h1>We are in Inicio</h1>;
}

function Video() {
  return <h1>We are in video</h1>;
}
