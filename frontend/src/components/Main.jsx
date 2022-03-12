import React from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = React.memo((props) => { 

  const userInfo = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile page__profile">
        <div className="profile__avatar-container">
          <img src={userInfo.avatar} alt="Аватар" className="profile__avatar" />
          <button className="profile__avatar-edit-btn" type="button" aria-label="Кнопка редактирования аватара" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userInfo.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования профиля" onClick={props.onEditProfile}>
          </button>
          <p className="profile__subtitle">{userInfo.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Кнопка добавления карточек" onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="elements page__elements">
        <ul className="cards page__list">
          {
            props.cards.map((card) => {
              return (<Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
                onDelCardClick={props.onDelCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />)
            })
          }
        </ul>
      </section>
    </>
  );
})

export default Main;