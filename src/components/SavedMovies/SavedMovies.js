import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  );
}

export default SavedMovies;
