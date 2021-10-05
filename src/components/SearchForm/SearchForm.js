import React from 'react';
import icon from '../../images/search-form-icon.svg';

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  function handleChangeSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleChangeShortValue(e) {
    setIsShort(e.target.checked);
  }

  function handleButtonSearch(e) {
    e.preventDefault();
    onSearch(searchValue, isShort);
  }

  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__text-area'>
          <img className='search-form__icon' src={icon} alt='иконка поиска' />
          <input
            className='search-form__input'
            placeholder='Фильмы'
            type='text'
            value={searchValue || ''}
            onChange={handleChangeSearchValue}
          />
          <button className='search-form__button' onClick={handleButtonSearch}></button>
        </div>
        <div className='search-form__block'>
          <label className='search-form__checkbox-area'>
            <input
              className='search-form__checkbox'
              checked={isShort}
              onChange={(e) => {
                handleChangeShortValue(e);
                onSearch(searchValue, !isShort);
              }}
              type='checkbox'
            />
            <span className='search-form__checkbox-visible'></span>
            Короткометражки
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
