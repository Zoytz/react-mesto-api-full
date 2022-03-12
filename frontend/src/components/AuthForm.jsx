import React from "react";
import {useFormWithValidation } from '../hooks/useFormWithValidation';

export const AuthForm = React.memo((props) => {

  const {values, handleChange, errors, isFormValid, resetForm} = useFormWithValidation();

  // const [values, setValues] = React.useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitCallback(values.password, values.email);
    resetForm();
  }

    return (
      <form onSubmit={handleSubmit} className={`form form_type_auth`} name='register-form' noValidate>
        <h2 className="form__item form__title form__title_type_auth">{props.title}</h2>
        <input value={values.email || ''} onChange={handleChange} placeholder='Email' type="email" className="form__input form__input_type_email form__input_type_auth" name="email" id="email" minLength="2" maxLength="40" required />
        <span className={`form__input-error email-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.email}</span>

        <input value={values.password || ''} onChange={handleChange} placeholder='Пароль' type="password" className="form__input form__input_type_password form__input_type_auth" name="password" id="password" minLength="2" maxLength="200" required />
        <span className={`form__input-error password-error ${isFormValid ? '' : 'form__input-error_active'}`}>{errors.password}</span>

        <button disabled={!isFormValid} type="submit" className={`form__item form__button form__button_type_auth ${isFormValid ? '' : 'form__button_type_auth_disabled'}`} value={props.buttonText} aria-label="Кнопка отправки формы">{`${props.isLoading ? 'Ждемс...' : props.buttonText}`}</button>
      </form>
    )
  })