import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/FormValidation';

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  function handleSubmit(e) {
    onLogin(e, { password: values.password, email: values.email });
    resetForm();
  }

  return (
    <section className='login'>
      <img className='login__logo' src={logo} alt='лого проекта'></img>
      <h2 className='login__greetings'>Добро пожаловать!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__field-name'>E-mail</label>
        <input
          className={`login__field ${errors.email ? 'login__field_type_error' : ''}`}
          type='email'
          name='email'
          id='email-input'
          placeholder='Email'
          required
          value={values.email || ''}
          onChange={handleChange}
        ></input>
        <span className='login__field-error'>{errors.email}</span>
        <label className='login__field-name'>Password</label>
        <input
          className={`login__field ${errors.password ? 'login__field_type_error' : ''}`}
          type='password'
          name='password'
          id='password-input'
          placeholder='Пароль'
          required
          minLength='8'
          value={values.password || ''}
          onChange={handleChange}
        ></input>
        <span className='login__field-error'>{errors.password}</span>
        <button
          className={`login__form-submit ${isValid ? '' : 'login__form-submit_disabled'}`}
          disabled={!isValid}
        >
          Войти
        </button>
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
