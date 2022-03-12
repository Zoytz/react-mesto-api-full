import headerLogo from '../images/Logo.svg';
import { Route, Link, Routes } from 'react-router-dom';
import React from 'react';

const Header = React.memo((props) => {
  return (
    <Routes>
      <Route path="/sign-up" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <Link to="/sign-in" className="header__link">Войти</Link>
        </header>
      } />
      <Route path="/sign-in" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        </header>
      } />
      <Route exact path="/" element={
        <header className="header page__header">
          <img className="logo" src={headerLogo} alt="Место" />
          <div className="header__info">
            <p className="header__info-text">{props.userEmail}</p>
            <button onClick={props.handleLogout} className="header__button">Выйти</button>
          </div>
          <button onClick={props.handleMenuButtonActive} className={`header__menu-btn ${props.isMenuButtonActive ? 'header__menu-btn_active' : ''}`}></button>
        </header>
      } />
    </Routes>
  );
})

export default Header;