import React from 'react';
import icon from '../../images/search-form-icon.svg'

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__text-area'>
          <img className='search-form__icon' src={icon} alt='иконка поиска' />
          <input className='search-form__input' defaultValue='Фильмы' type='text' />
          <button className='search-form__button'></button>
        </div>
        <div className='search-form__block'>
          <label className='search-form__checkbox-area'>
            <input className='search-form__checkbox' type='checkbox' />
            <span className='search-form__checkbox-visible'></span>
            Короткометражки
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
