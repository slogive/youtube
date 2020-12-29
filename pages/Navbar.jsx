import Link from 'next/link';
import { connect } from 'react-redux';
import {
  changeNavBarVisibility,
  changeSearch,
  changeSearchStatus,
} from '../redux/actions/actions';

import User from './components/User';

import styles from '../styles/Navbar.module.css';

function Navbar({
  navBarVisibility,
  changeNavBarVisibility,
  changeSearchStatus,
  changeSearch,
}) {
  function removeSearch() {
    changeSearchStatus(false);
    changeSearch('');
  }

  return (
    <nav
      className={
        navBarVisibility
          ? styles.Navbar + ' ' + styles.Disable
          : styles.Navbar + ' ' + styles.Active
      }
    >
      <div className={styles.MobileButton} onClick={changeNavBarVisibility}>
        <span>&#9587;</span>
        <span role='title'>Cuenta</span>
      </div>
      <div className={styles.Menu}>
        <section className={styles.Container}>
          <div className={styles.ClassMain}>
            <Link href='/' passHref>
              <div onClick={() => removeSearch()}>
                <svg
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g>
                    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8'></path>
                  </g>
                </svg>
                <span>Principal</span>
              </div>
            </Link>
            <div>
              <svg
                viewBox='0 0 24 24'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <g>
                  <path d='M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z'></path>
                </g>
              </svg>
              <span>Tendencias</span>
            </div>
            <div>
              <svg
                viewBox='0 0 24 24'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <g>
                  <path d='M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z'></path>
                </g>
              </svg>
              <span>Suscripciones</span>
            </div>
          </div>
          <div className={styles.ClassPersonal}>
            <div>
              <svg
                viewBox='0 0 24 24'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <g>
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z'></path>
                </g>
              </svg>
              <span>Biblioteca</span>
            </div>
            <div>
              <svg
                viewBox='0 0 24 24'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <g>
                  <path d='M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z'></path>
                </g>
              </svg>
              <span>Historial</span>
            </div>
          </div>
          <div className={styles.ClassUser}>
            <p>
              Accede para dar “Me gusta” a los videos, realizar comentarios y
              suscribirte.
            </p>
            <User></User>
          </div>
          <Link href='/configuracion' passHref>
            <div className={styles.ClassSettings}>
              <div>
                <svg
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g>
                    <path d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'></path>
                  </g>
                </svg>
                <span>Configuración</span>
              </div>
              <div>
                <svg
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g>
                    <path d='M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z'></path>
                  </g>
                </svg>
                <span>Historial de denuncias</span>
              </div>
              <div>
                <svg
                  viewBox='0 0 24 24'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'></path>
                  </g>
                </svg>
                <span>Ayuda</span>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  navBarVisibility: state.navBarVisibility,
});

const mapDispatchToProps = {
  changeNavBarVisibility,
  changeSearch,
  changeSearchStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
