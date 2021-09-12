import React from 'react';
import buttonLogo from '../../images/text__COLOR_font-main.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav className='portfolio__navigation'>
        <ul className='portfolio__link-list'>
          <li className='portfolio__list-box'>
            <a className='portfolio__link' href='https://github.com/Gadlevskiy/how-to-learn'>Статичный сайт</a>
            <img src={buttonLogo} alt='Логотип кнопки'></img>
          </li>
          <li className='portfolio__list-box'>
            <a className='portfolio__link' href='https://github.com/Gadlevskiy/russian-travel'>Адаптивный сайт</a>
            <img src={buttonLogo} alt='Логотип кнопки'></img>
          </li>
          <li className='portfolio__list-box'>
            <a className='portfolio__link' href='https://github.com/Gadlevskiy/react-mesto-api-full'>Одностраничное приложение</a>
            <img src={buttonLogo} alt='Логотип кнопки'></img>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
