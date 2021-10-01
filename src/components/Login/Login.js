import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Login({onLogin}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    onLogin(e, { password, email });
  }

  return (
    <section className='login'>
      <img className='login__logo' src={logo} alt='лого проекта'></img>
      <h2 className='login__greetings'>Добро пожаловать!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__field-name'>E-mail</label>
        <input
          className='login__field'
          type='email'
          name='Email'
          id='email-input'
          placeholder='Email'
          required
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <label className='login__field-name'>Password</label>
        <input
          className='login__field'
          type='password'
          name='password'
          id='password-input'
          placeholder='Пароль'
          required
          value={password}
          onChange={handleChangePassword}
        ></input>
        <button className='login__form-submit'>Войти</button>
      </form>
      <div className='login__register-box'>
        <p className='login__register-question'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__register'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
