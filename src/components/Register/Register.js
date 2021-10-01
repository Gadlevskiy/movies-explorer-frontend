import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    onRegister(e, { password, email, name });
  }

  return (
    <section className='register'>
      <img className='register__logo' src={logo} alt='лого проекта'></img>
      <h2 className='register__greetings'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__field-name'>Имя</label>
        <input
          className='register__field'
          type='name'
          name='name'
          id='name-input'
          placeholder='Имя'
          required
          value={name}
          onChange={handleChangeName}
        ></input>
        <label className='register__field-name'>E-mail</label>
        <input
          className='register__field'
          type='email'
          name='Email'
          id='email-input'
          placeholder='Email'
          required
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <label className='register__field-name'>Пароль</label>
        <input
          className='register__field'
          type='password'
          name='password'
          id='password-input'
          placeholder='Пароль'
          required
          value={password}
          onChange={handleChangePassword}
        ></input>
        <div className='register__form-error'>Что-то пошло не так...</div>
        <button className='register__form-submit'>Зарегистрироваться</button>
      </form>
      <div className='register__login-box'>
        <p className='register__login-question'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__login'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
