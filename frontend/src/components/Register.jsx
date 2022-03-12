import React from 'react';
import { Link } from 'react-router-dom';

export const Register = React.memo((props) => {

  return (
    <section className="login page__login">
      {props.children}
      <p className='login__text'>Уже зарегистрированы? <Link className='login__link' to='/sign-in'>Войти</Link></p>
    </section>
  )
});