import { ChangeEvent } from 'react';

export type CoFormProps<T> = {
  initialValues: T;
};

export type CoFormResp<T> = {
  values: T;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
