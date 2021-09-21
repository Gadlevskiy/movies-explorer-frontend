import React from 'react';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__greetings'>Привет, Алексей!</h2>
      <form className='profile__form'>
        <div className='profile__field'>
          <h3 className='profile__field-name'>Имя</h3>
          <input defaultValue='Алексей' className='profile__field-value'></input>
        </div>
        <div className='profile__field'>
          <h3 className='profile__field-name'>E-mail</h3>
          <input defaultValue='pochta@yandex.ru' className='profile__field-value'></input>
        </div>
        <button className='profile__form-submit' type='submit'>Редактировать</button>
      </form>
      <button className='profile__button-exit'>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
