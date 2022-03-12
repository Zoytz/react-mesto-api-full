import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

const Card = React.memo((props) => {

  const userInfo = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner === userInfo._id;
  const cardDeleteButtonClassName = (
    `card__del-btn ${isOwn ? '' : 'card__del-btn_disabled'}`
  );

  const isLiked = props.card.likes.some(i => i === userInfo._id);

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  } 

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} type="button" aria-label="Кнопка удаления карточки" onClick={handleDeleteClick}></button>
      <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
      <div className="card__content">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк" onClick={handleLikeClick}></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
})

export default Card;