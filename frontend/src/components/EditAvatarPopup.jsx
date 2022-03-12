import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const EditAvatarPopup = React.memo((props) => {

  // const inputRef = React.useRef();
  // ref={inputRef}

  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: values.avatar,
    });
    resetForm();
  }

  return (
    <PopupWithForm isLoading={props.isLoading} isFormValid={isFormValid} onSubmit={handleSubmit} name='avatar' title='Обновить аватар' isOpen={props.isOpen} onClose={props.onClose} buttonText='Сохранить'>
      <input value={values.avatar || ''} onChange={handleChange} type="url" className="form__input form__input_type_avatar" name="avatar" id="avatar" placeholder="Ссылка на картинку" required />
      <span className={`form__input-error avatar-error ${isFormValid ? '' : "form__input-error_active"}`}>{errors.avatar}</span>
    </PopupWithForm>
  )
})

export { EditAvatarPopup };