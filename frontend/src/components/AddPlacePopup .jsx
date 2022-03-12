import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const AddPlacePopup = React.memo((props) => {

  // const [placeName, setPlaceName] = React.useState('');
  // const [placeLink, setPlaceLink] = React.useState('');

  // function handleNameChange(evt) {
  //   return setPlaceName(evt.target.value);
  // }

  // function handleLinkChange(evt) {
  //   return setPlaceLink(evt.target.value);
  // }

  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: values.placeName,
      link: values.placeLink,
    });
  }


  return (
    <PopupWithForm isLoading={props.isLoading} isFormValid={isFormValid} onSubmit={handleSubmit} name='card' title='Новое место' isOpen={props.isOpen} onClose={props.onClose} buttonText='Создать'>
      <input value={values.placeName || ''} onChange={handleChange} type="text" className="form__input form__input_type_place-name" name="placeName" id="place-name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className={`form__input-error place-name-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.placeName}</span>
      <input value={values.placeLink || ''} onChange={handleChange} type="url" className="form__input form__input_type_place-image" name="placeLink" id="place-image" placeholder="Ссылка на картинку" required />
      <span className={`form__input-error place-image-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.placeLink}</span>
    </PopupWithForm>
  )
})

export { AddPlacePopup };