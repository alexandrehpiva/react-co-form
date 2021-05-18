import React, { FormEvent } from 'react';

import useCoForm from '../../hooks/useCoForm';

type FormProps = {
  name: string;
  password: string;
};

const initialValues: FormProps = {
  name: '',
  password: '',
};

const Form: React.FC = () => {
  const { values, handleChange } = useCoForm<FormProps>({ initialValues });

  return (
    <form
      data-testid="form"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <div>
        <label htmlFor="address">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
