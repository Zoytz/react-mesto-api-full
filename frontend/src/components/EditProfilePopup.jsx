import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const EditProfilePopup = React.memo((props) => {

  const userInfo = React.useContext(CurrentUserContext);

  // const [name, setName] = React.useState(userInfo.name);
  // const [description, setDescription] = React.useState(userInfo.about);

  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();

  React.useEffect(() => {
    resetForm({name: userInfo.name, about: userInfo.about}, {}, true);
    
    // setDescription(userInfo.about);
  }, [userInfo, props.isOpen, resetForm]);

  // function handleNameChange(evt) {
  //   setName(evt.target.value );
  // }

  // function handleDescriptionChange(evt) {
  //   setDescription(evt.target.value );
  // }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <PopupWithForm isLoading={props.isLoading} isFormValid={isFormValid} onSubmit={handleSubmit} name='profile' title='Редактировать профиль' isOpen={props.isOpen} onClose={props.onClose} buttonText='Сохранить'>
      <input value={values.name || ''} onChange={handleChange} type="text" className="form__input form__input_type_name " name="name" id="name" minLength="2" maxLength="40" required />
      <span className={`form__input-error name-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.name}</span>
      <input value={values.about || ''} onChange={handleChange} type="text" className="form__input form__input_type_job" name="about" id="about" minLength="2" maxLength="200" required />
      <span className={`form__input-error about-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.about}</span>
    </PopupWithForm>
  )
})

export { EditProfilePopup };