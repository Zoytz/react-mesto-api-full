import React from "react";
const ImagePopup = React.memo((props) => {

  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_active' : ''}`} onClick={props.onClose}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия попапа" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <h2 className="popup__title">{props.card.name}</h2>
      </div>
    </div>
  );
})

export default ImagePopup;