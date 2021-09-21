import React from 'react';
import photo from '../../images/IMG_0456.jpeg';

function AboutMe() {
  return (
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__title'>Студент</h2>
      <img className='aboutMe__photo' src={photo} alt='Фото автора'></img>
      <article className='aboutMe__article'>
        <h3 className='aboutMe__article-title'>Алексей</h3>
        <p className='aboutMe__article-status'>Фронтенд-разработчик, 28 лет</p>
        <p className='aboutMe__article-text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я
          люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
          компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <nav>
          <a className='aboutMe__link' href='https://www.facebook.com/profile.php?id=100001744149796' target='_blank' rel="noopener noreferrer">Facebook</a>
          <a className='aboutMe__link' href='https://github.com/Gadlevskiy' target='_blank' rel="noopener noreferrer">Github</a>
        </nav>
      </article>
    </section>
  );
}

export default AboutMe;
