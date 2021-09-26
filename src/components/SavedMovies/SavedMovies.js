import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({movies, onClick}) {
  return (
    <section className='saved-movies'>
    <SearchForm onSearch={onClick} />
    <MoviesCardList stateBtnSave={false} movies={movies}/>
    </section>
  );
}

export default SavedMovies;
