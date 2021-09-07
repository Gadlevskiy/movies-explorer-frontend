import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <div className='navTab'>
      <Link className='navTab__link-button'>О проекте</Link>
      <Link className='navTab__link-button'>Технологии</Link>
      <Link className='navTab__link-button'>Студент</Link>
    </div>
  );
}

export default NavTab;
