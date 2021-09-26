import React from 'react';

function MoviesCard({ stateBtnSave, movie, onBtnSave }) {
  function handleDeleteClick() {
    onBtnSave(movie.movieId);
  }

  const notAdded = true;
  return (
    <div className='card'>
      <div className='card__cover'>
        <img className='card__cover-image' src={movie.image} alt={movie.nameRU} />
        {stateBtnSave ? (
          notAdded ? (
            <button className='card__button-add' onClick={handleDeleteClick}>Сохранить</button>
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
