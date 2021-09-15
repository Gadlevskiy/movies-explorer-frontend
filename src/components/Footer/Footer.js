import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__nav-block'>
        <ul className='footer__link-list'>
          <li className='footer__list-item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list-item'>
            <a
              className='footer__link'
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li className='footer__list-item'>
            <a
              className='footer__link'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
        <p className='footer__date'>&copy;2021</p>
      </div>
    </footer>
  );
}

export default Footer;
