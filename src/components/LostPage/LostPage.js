import React from 'react';
import { Link } from 'react-router-dom';

function LostPage() {
  return (
    <section className='lost-page'>
      <h2 className='lost-page__title'>404</h2>
      <p className='lost-page__description'>Страница не найдена</p>
      <Link className='lost-page__btn-exit' to='/'>Назад</Link>
    </section>
  );
}

export default LostPage;