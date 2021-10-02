import React from 'react';

function MoviesCard({ stateBtnSave, movie, onBtnSave, onBtnDelete, likedMovies }) {
  const [isSaved = stateBtnSave ? likedMovies(movie) : false, setIsSaved] = React.useState();

  function timeConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
  }

  function handleDeleteClick() {
    onBtnDelete(movie.movieId);
    setIsSaved(false);
  }

  function handleSaveClick() {
    onBtnSave(movie);
    setIsSaved(true);
  }

  return (
    <div className='card'>
      <div className='card__cover'>
        <a className='card__trailer-link' href={movie.trailer} target='_blank' rel='noopener noreferrer'>
          <img className='card__cover-image' src={movie.image} alt={movie.nameRU} />
        </a>
        {stateBtnSave ? (
          isSaved ? (
            <button className='card__button-added' onClick={handleDeleteClick}></button>
          ) : (
            <button className='card__button-add' onClick={handleSaveClick}>
              Сохранить
            </button>
          )
        ) : (
          <button className='card__button-dellete' onClick={handleDeleteClick}></button>
        )}
      </div>
      <div className='card__description'>
        <h2 className='card__name'>{movie.nameRU}</h2>
        <p className='card__movie-length'>{timeConverter(movie.duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
