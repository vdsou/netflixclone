import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        Feito com
        {' '}
        <span>❤️</span>
        {' '}
        por
        {' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/vdsou">vdsou</a>
      </p>
      <p>Direitos de imagem para Netflix</p>
      <p>
        Dados obtidos de
        {' '}
        <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">www.themoviedb.org</a>
      </p>
    </footer>
  );
}

export default Footer;
