import React from 'react';

function AboutProject() {
  return (
    <div className='aboutProject' id='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__articles'>
      <article className='aboutProject__article'>
        <h3 className='aboutProject__article-title'>Дипломный проект включал 5 этапов</h3>
        <p className='aboutProject__article-text'>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
          доработки.
        </p>
      </article>
      <article className='aboutProject__article'>
        <h3 className='aboutProject__article-title'>На выполнение диплома ушло 5 недель</h3>
        <p className='aboutProject__article-text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
          защититься.
        </p>
      </article>
      </div>
      <div className='aboutProject__info-block'>
        <p className='aboutProject__info-head aboutProject__info-head_theme_dark'>1 неделя</p>
        <p className='aboutProject__info-head'>4 недели</p>
        <p className='aboutProject__info-text'>Back-end</p>
        <p className='aboutProject__info-text'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
