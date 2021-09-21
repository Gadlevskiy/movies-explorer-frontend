import React from 'react';
import { Link } from 'react-router-dom';
import accLogo from '../../images/account-icon.svg';

function Navigation( {isOpen, onClose}) {
  return (
    <section className={`navigation ${isOpen ? 'navigation_active' : ''} `}>
      <div className='navigation__menu'>
        <button className='navigation__btn-exit' onClick={onClose}></button>
        <div className='navigation__link-block'>
          <Link className='navigation__link' to='/' onClick={onClose}>
            Главная
          </Link>
          <Link className='navigation__link' to='/movies' onClick={onClose}>
            Фильмы
          </Link>
          <Link className='navigation__link' to='/saved-movies' onClick={onClose}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link className='navigation__profile-link' to='/profile' onClick={onClose}>
          <img className='navigation__profile-logo' src={accLogo} alt='лого профиля' />
          Аккаунт
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
