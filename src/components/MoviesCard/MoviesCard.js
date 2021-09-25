import React from 'react';

function MoviesCard({ movie }) {
  // Переменная в состоянии true показывает кнопку сохранить,
  // а в состоянии false показывает кнопку добавить
  const notAdded = true;
  // Переменная location в состоянии true дает в выборку кнопки добавить и сохранить,
  // а в состоянии false кнопку удаления
  const location = false;
  return (
    <div className='card'>
      <div className='card__cover'>
        <img
          className='card__cover-image'
          src={movie.image}
          alt={movie.nameRU}
        />
        {location ? (
          notAdded ? (
            <button className='card__button-add'>Сохранить</button>
          ) : (
            <button className='card__button-added'></button>
          )
        ) : (
          <button className='card__button-dellete'></button>
        )}
      </div>
      <div className='card__description'>
        <h2 className='card__name'>{movie.nameRU}</h2>
        <p className='card__movie-length'>13:40</p>
      </div>
    </div>
  );
}

export default MoviesCard;
