import React from 'react';
import { Link } from 'react-router-dom';
import accLogo from '../../images/account-icon.svg';

function Navigation() {
  return (
    <section className='navigation'>
      <button className='navigation__btn-exit'></button>
      <div className='navigation__link-block'>
        <Link className='navigation__link' to='/'>Главная</Link>
        <Link className='navigation__link' to='/movies'>Фильмы</Link>
        <Link className='navigation__link' to='/saved-movies'>Сохранённые фильмы</Link>
      </div>
      <Link className='navigation__profile-link' to='/profile'>
        <img className='navigation__profile-logo' src={accLogo} alt='лого профиля' />
        Аккаунт
      </Link>
    </section>
  );
}

export default Navigation;
