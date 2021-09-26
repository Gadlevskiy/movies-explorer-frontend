import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({isNeedBtnMore, movies, onClick, onRenderClick, onBtnSave}) {
  return (
    <section className='movies'>
      <SearchForm onSearch={onClick} />
      <MoviesCardList stateBtnSave={true} movies={movies} onBtnSave={onBtnSave}/>
      {isNeedBtnMore && (<button className='movies-card-list__show-btn' onClick={onRenderClick}>
        Ещё
      </button>)}
    </section>
  );
}

export default Movies;
