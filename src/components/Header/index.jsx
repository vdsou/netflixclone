import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  const { isBlack } = props;
  return (
    <header className={isBlack ? 'isBlack' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png"
            alt="Logo da Netflix"
          />
        </a>
      </div>
      <div className="header--userIcon">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Ícone do Usuário"
          />
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  isBlack: PropTypes.bool,
}.isRequired;

export default Header;
