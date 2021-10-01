import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ location, onMenuClick, onLogout, onFormSubmit }) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(()=>{
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser.email, currentUser.name])

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    onFormSubmit(e, {email: email, name: name});
  }

  return (
    <>
      <Header location={location} onMenuClick={onMenuClick} />
      <section className='profile'>
        <h2 className='profile__greetings'>Привет, {currentUser.name}</h2>
        <form className='profile__form'>
          <div className='profile__field'>
            <h3 className='profile__field-name'>Имя</h3>
            <input
              className='profile__field-value'
              type='name'
              name='name'
              id='name-input'
              placeholder='Имя'
              required
              value={name}
              onChange={handleChangeName}
            ></input>
          </div>
          <div className='profile__field'>
            <h3 className='profile__field-name'>E-mail</h3>
            <input
              className='profile__field-value'
              type='email'
              name='Email'
              id='email-input'
              placeholder='Email'
              required
              value={email}
              onChange={handleChangeEmail}
            ></input>
          </div>
          <button className='profile__form-submit' type='submit' onClick={handleSubmit}>
            Редактировать
          </button>
        </form>
        <button className='profile__button-exit' onSubmit={onLogout}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
