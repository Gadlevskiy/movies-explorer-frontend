import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({stateBtnSave, movies, onBtnSave}) {

  return (
    <section className='movies-card-list'>
      {movies.map((movie) => (
        <MoviesCard key={movie.movieId} stateBtnSave={stateBtnSave} movie={movie} onBtnSave={onBtnSave} />
      ))}
    </section>
  );
}

export default MoviesCardList;
