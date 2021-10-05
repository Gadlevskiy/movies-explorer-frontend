import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/FormValidation';

function Register({ onRegister }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  function handleSubmit(e) {
    onRegister(e, { password: values.password, email: values.email, name: values.name });
    resetForm();
  }

  return (
    <section className='register'>
      <img className='register__logo' src={logo} alt='лого проекта'></img>
      <h2 className='register__greetings'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__field-name'>Имя</label>
        <input
          className={`register__field ${errors.name ? 'register__field_type_error' : ''}`}
          type='name'
          name='name'
          id='name-input'
          placeholder='Имя'
          required
          minLength='3'
          value={values.name || ''}
          onChange={handleChange}
        ></input>
        <span className='register__field-error'>{errors.name}</span>
        <label className='register__field-name'>E-mail</label>
        <input
          className={`register__field ${errors.email ? 'register__field_type_error' : ''}`}
          type='email'
          name='email'
          id='email-input'
          placeholder='Email'
          required
          value={values.email || ''}
          onChange={handleChange}
        ></input>
        <span className='register__field-error'>{errors.email}</span>
        <label className='register__field-name'>Пароль</label>
        <input
          className={`register__field ${errors.password ? 'register__field_type_error' : ''}`}
          type='password'
          name='password'
          id='password-input'
          placeholder='Пароль'
          required
          minLength='8'
          value={values.password || ''}
          onChange={handleChange}
        ></input>
        <span className='register__field-error'>{errors.password}</span>
        <button
          className={`register__form-submit ${isValid ? '' : 'register__form-submit_disabled'}`}
          disabled={!isValid}>Зарегистрироваться</button>
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
