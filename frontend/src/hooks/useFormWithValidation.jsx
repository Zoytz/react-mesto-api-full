import { useState, useCallback } from 'react';

export function useFormWithValidation () {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues((values) => ({...values, [name]: value}));
    setErrors((errors) => ({...errors, [name]: input.validationMessage}));
    setIsFormValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = (false)) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  }, [setValues, setErrors, setIsFormValid]);

  return {values, handleChange, errors, isFormValid, resetForm}
}