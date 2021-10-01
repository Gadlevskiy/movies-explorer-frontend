import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({stateBtnSave, movies, onBtnSave, onBtnDelete, likedMovies}) {

  return (
    <section className='movies-card-list'>
      {movies.map((movie) => (
        <MoviesCard key={movie.movieId} onBtnDelete={onBtnDelete} stateBtnSave={stateBtnSave} movie={movie} onBtnSave={onBtnSave} likedMovies={likedMovies} />
      ))}
    </section>
  );
}

export default MoviesCardList;
