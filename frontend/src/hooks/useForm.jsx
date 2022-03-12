import { useState } from 'react';

export function useForm() {

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues((values) => ({...values, [name]: value}))
  }

  return {values, handleChange, setValues}
}