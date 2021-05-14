import { ChangeEvent, useState } from 'react';

export type CoForm<T> = {
  initialValues: T;
};

export type CoFormResponse<T> = {
  values: T;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Controls the form state
 *
 * @template T
 * @param {CoForm<T>} {
 *   initialValues
 * }
 * @return {*} {CoFormResponse<T>}
 */
function useCoForm<T extends { [k in keyof T]: any }>({
  initialValues,
}: CoForm<T>): CoFormResponse<T> {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    if (fieldName !== null) {
      setValues({
        ...values,
        [fieldName]: fieldValue,
      });
    }
  }

  return {
    values,
    handleChange,
  };
}

// TODO: touched, errors, innerRef

export default useCoForm;
