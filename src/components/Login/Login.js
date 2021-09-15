import React from 'react';
import logo from '../../images/header-logo.svg';

function Login() {
  return (
    <section className='login'>
      <img className='login__logo' src={logo} alt='лого проекта'></img>
      <h2 className='login__greetings'>Добро пожаловать!</h2>
      <form className='login__form'>
        <label className='login__field-name'>Имя</label>
        <input className='login__field' type='name' defaultValue='Алексей'></input>
        <label className='login__field-name'>E-mail</label>
        <input className='login__field' type='email' defaultValue='pochta@yandex.ru'></input>
        <button className='login__form-submit'>Войти</button>
      </form>
      <div className='login__register-box'>
        <p className='login__register-question'>Ещё не зарегистрированы?</p>
        <p className='login__register'>Регистрация</p>
      </div>
    </section>
  );
}

export default Login;
