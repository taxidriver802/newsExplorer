import { useState, useEffect } from 'react';

export default function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation rules
  const validators = {
    email: (value) =>
      /^\S+@\S+\.\S+$/.test(value) ? '' : 'Invalid email address',
    password: (value) =>
      value.length >= 4 ? '' : 'Password must be at least 4 characters',
    username: (value) =>
      value.trim() !== '' ? '' : 'Username cannot be empty',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    const error = validators[name] ? validators[name](value) : '';
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  useEffect(() => {
    const hasErrors = Object.values(errors).some((e) => e);
    const allFilled = Object.values(values).every((v) => v.trim() !== '');
    setIsFormValid(!hasErrors && allFilled);
  }, [errors, values]);

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsFormValid(false);
  };

  return { values, errors, isFormValid, handleChange, resetForm };
}
