import React from 'react';
import logo from '../../images/header-logo.svg'

function Register() {
  return (
    <section className='register'>
      <img className='register__logo' src={logo} alt='лого проекта'></img>
      <h2 className='register__greetings'>Добро пожаловать!</h2>
      <form className='register__form'>
        <label className='register__field-name'>Имя</label>
        <input className='register__field' type='name' defaultValue='Алексей'></input>
        <label className='register__field-name'>E-mail</label>
        <input className='register__field' type='email' defaultValue='pochta@yandex.ru'></input>
        <label className='register__field-name'>Пароль</label>
        <input className='register__field' type='password' defaultValue='Пароль'></input>
        <div className='register__form-error'>Что-то пошло не так...</div>
        <button className='register__form-submit'>Зарегистрироваться</button>
      </form>
      <div className='register__login-box'>
        <p className='register__login-question'>Уже зарегистрированы?</p>
        <p className='register__login'>Войти</p>
      </div>
    </section>
  );
}

export default Register;
