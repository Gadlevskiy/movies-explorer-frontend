import React from 'react';
import logo from '../../images/header-logo.svg';
import accLogo from '../../images/account-icon.svg';
import { Link } from 'react-router-dom';

function Header({ location, onMenuClick }) {
  function renderHeader() {
    if (location === '/')
      return (
        <div className='header__registration-block'>
          <Link className='header__signup-link' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__signin-link' to='/signin'>
            Войти
          </Link>
        </div>
      );
    else if (location === '/movies' || '/saved-movies' || '/profile')
      return (
        <>
          <button className='header__menu-btn' onClick={onMenuClick}></button>
          <div className='header__menu'>
            <Link to='/movies' className='header__movies-link'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='header__saved-movies-link'>
              Сохранённые фильмы
            </Link>
            <Link to='/profile' className='header__profile-link'>
              <img className='header__profile-logo' src={accLogo} alt='лого профиля' />
              Аккаунт
            </Link>
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
