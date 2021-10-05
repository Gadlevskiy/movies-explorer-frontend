import { useState, useCallback } from 'react';

export default function useFormWithValidation(data) {
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === 'email') {
      if (value === '') {
        setIsValid(false);
        setErrors({
          ...errors,
          [name]: 'Заполните это поле',
        });
      } else if (!value.match(/.+@.+\..+/i)) {
        setIsValid(false);
        setErrors({
          ...errors,
          [name]: 'Email введен не верно',
        });
      } else {
        setIsValid(true);
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: target.validationMessage,
      });

      setIsValid(target.closest('form').checkValidity());
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
}
