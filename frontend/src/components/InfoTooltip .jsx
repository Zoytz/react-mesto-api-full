import acceptIcon from '../images/Union.png';
import failIcon from '../images/Fail.png';
import React from 'react';

const InfoTooltip = React.memo((props) => {

  return (
    <div className={`popup popup_type_info ${props.isOpen ? 'popup_active' : ''}`} onClick={props.onClose}>
      <div className="popup__container popup__container_type_info">
        <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия попапа" onClick={props.onClose}></button>
        <img className="popup__info-image" src={props.infoTooltipStatus ? acceptIcon : failIcon} alt='' />
        <h2 className="popup__title popup__title_type_info">{props.infoTooltipStatus ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
Попробуйте ещё раз.`}</h2>
      </div>
    </div>
  );
})

export default InfoTooltip;