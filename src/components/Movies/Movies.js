import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function Movies({
  isNeedBtnMore,
  movies,
  onClick,
  onRenderClick,
  onBtnSave,
  location,
  onMenuClick,
  likedMovies,
  onBtnDelete,
  loggedIn,
  handlePreloader,
}) {
  return (
    <>
      <Header location={location} onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <section className='movies'>
        <SearchForm onSearch={onClick} />
        {handlePreloader ? <Preloader /> : ''}
        <MoviesCardList
          stateBtnSave={true}
          movies={movies}
          onBtnSave={onBtnSave}
          likedMovies={likedMovies}
          onBtnDelete={onBtnDelete}
        />
        {isNeedBtnMore && (
          <button className='movies-card-list__show-btn' onClick={onRenderClick}>
            Ещё
          </button>
        )}
      </section>
    </>
  );
}

export default Movies;
