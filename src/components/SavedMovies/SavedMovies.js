import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  movies,
  onClick,
  location,
  onMenuClick,
  onBtnDelete,
  loggedIn,
  handlePreloader,
}) {
  return (
    <>
      <Header location={location} onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <section className='saved-movies'>
        <SearchForm onSearch={onClick} />
        {handlePreloader ? <Preloader /> : ''}
        <MoviesCardList stateBtnSave={false} onBtnDelete={onBtnDelete} movies={movies} />
      </section>
    </>
  );
}

export default SavedMovies;
