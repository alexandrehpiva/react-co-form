import { ChangeEvent, useCallback, useState } from 'react';
import { CoFormProps, CoFormResp } from '../types';

/**
 * Controls the form state
 */
function useCoForm<T extends Record<keyof T, any>>({
  initialValues,
}: CoFormProps<T>): CoFormResp<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      if (fieldName !== null) {
        setValues({
          ...values,
          [fieldName]: fieldValue,
        });
      }
    },
    [values]
  );

  return {
    values,
    handleChange,
  };
}

// TODO: touched, errors, innerRef

export default useCoForm;
