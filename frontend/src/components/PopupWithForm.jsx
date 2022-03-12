
function PopupWithForm(props) {

  const handleOverlayClose = (e) => {
    if(e.target === e.currentTarget && props.isOpen){
      props.onClose();
    }
  }

  return (
    <div onMouseDown={handleOverlayClose} className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия попапа" onClick={props.onClose}></button>
        <form onSubmit={props.onSubmit} className={`form form_type_${props.name}`} name={`${props.name}-form`} noValidate>
          <h2 className="form__item form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className={`form__item form__button ${props.isFormValid ? '' : 'form__item form__button_disabled'}`} value={props.buttonText} aria-label="Кнопка отправки формы" disabled={!props.isFormValid}>{`${props.isLoading ? 'Сохранение...' : props.buttonText}`}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;