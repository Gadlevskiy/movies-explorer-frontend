import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className='movies-card-list'>
      {movies.map((movie) => (
        <MoviesCard key={movie.movieId} movie={movie} />
      ))}
    </section>
  );
}

export default MoviesCardList;
