import React from 'react';
import logo from '../../images/header-logo.svg';
import accLogo from '../../images/account-icon.svg'
import { Link } from 'react-router-dom';

function Header({ location }) {
  function renderHeader() {
    if (location === '/')
      return (
        <div>
          <Link to='/signup'>Регистрация</Link>
          <Link to='/signin'>Войти</Link>
        </div>
      );
    else if (location === '/movies' || '/saved-movies' || '/profile')
      return (
      <>
      <Link className='header__menu-btn'></Link>
      <div className='header__menu'>
        <Link to='/movies' className='header__movies-link'>Фильмы</Link>
        <Link to='/saved-movies' className='header__saved-movies-link'>Сохранённые фильмы</Link>
        <Link to='/profile' className='header__profile-link'><img src={accLogo} alt='лого профиля'/>Аккаунт</Link>
      </div>
      </>
      );
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='лого проекта'></img>
      </Link>
      {renderHeader()}
    </header>
  );
}

export default Header;
