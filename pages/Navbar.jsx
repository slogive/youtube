import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Menu}>
        <div>
          <span>Logo YT</span>
        </div>
        <section>
          <div className={styles.ClassMain}>
            <div>
              <span>Principal</span>
            </div>
            <div>
              <span>Tendencias</span>
            </div>
            <div>
              <span>Suscripciones</span>
            </div>
          </div>
          <div className={styles.ClassPersonal}>
            <div>
              <span>Biblioteca</span>
            </div>
            <div>
              <span>Historial</span>
            </div>
          </div>
          <div className={styles.ClassUser}>
            <p>
              Accede para dar “Me gusta” a los videos, realizar comentarios y
              suscribirte.
            </p>
          </div>
          <div className={styles.ClassBest}>
            <div>
              <span>Música</span>
            </div>
            <div>
              <span>Deportes</span>
            </div>
            <div>
              <span>Videojuegos</span>
            </div>
            <div>
              <span>Noticias</span>
            </div>
          </div>
          <div className={styles.ClassSettings}>
            <div>
              <span>Configuración</span>
            </div>
            <div>
              <span>Historial de denuncias</span>
            </div>
            <div>
              <span>Ayuda</span>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Optional}></div>
    </nav>
  );
}

export default Navbar;
