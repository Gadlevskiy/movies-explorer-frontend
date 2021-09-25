import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies, onClick}) {
  return (
    <section className='movies'>
      <SearchForm onSearch={onClick} />
      <MoviesCardList movies={movies} />
      <button className='movies__show-btn'>Ещё</button>
    </section>
  );
}

export default Movies;
