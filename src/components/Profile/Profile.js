import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../utils/FormValidation';

function Profile({ location, onMenuClick, onLogout, onFormSubmit, loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({ name: currentUser.name, email: currentUser.email});

  function handleSubmit(e) {
    onFormSubmit(e, { email: values.email, name: values.name });
    resetForm();
  }

  return (
    <>
      <Header location={location} onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <section className='profile'>
        <h2 className='profile__greetings'>Привет, {currentUser.name}</h2>
        <form className='profile__form'>
          <div className='profile__field'>
            <label className='profile__field-name'>Имя</label>
            <input
              className={`profile__field-value ${
                errors.name ? 'profile__field-value_type_error' : ''
              }`}
              type='name'
              name='name'
              id='name-input'
              placeholder={currentUser.name}
              required
              minLength='3'
              value={values.name || ''}
              onChange={handleChange}
            ></input>
          </div>
          <span className='profile__field-error'>{errors.name}</span>
          <div className='profile__field'>
            <label className='profile__field-name'>E-mail</label>
            <input
              className={`profile__field-value ${
                errors.email ? 'profile__field-value_type_error' : ''
              }`}
              type='email'
              name='email'
              id='email-input'
              placeholder={currentUser.email}
              required
              value={(values.email) || ''}
              onChange={handleChange}
            ></input>
          </div>
          <span className='profile__field-error'>{errors.email}</span>
          <button
            className={`profile__form-submit ${isValid ? '' : 'profile__form-submit_disabled'}`}
            disabled={!isValid}
            type='submit'
            onClick={handleSubmit}
          >
            Редактировать
          </button>
        </form>
        <button className='profile__button-exit' onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
