import React from "react"
export const MobileMenu = React.memo(({
  isMenuButtonActive,
  userEmail,
  handleLogout,
  isLoggedIn
}) => {


  return (
    <section className={`mobile-menu ${isMenuButtonActive && isLoggedIn ? 'mobile-menu_active' : ''}`}>
      <p className="mobile-menu__info-text">{userEmail}</p>
      <button onClick={handleLogout} className="mobile-menu__button">Выйти</button>
    </section>
  )

})