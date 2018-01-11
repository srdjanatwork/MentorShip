/* eslint react/prop-types: 0 */
/* eslint object-curly-newline: ["error", "never"] */
/* eslint-env es6 */

import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import submit from '../submit';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={ label }>
      {label}
      <input { ...input } placeholder={ label } type={ type } />
      {touched && error && <span>{error}</span>}
    </label>
  </div>
);

const Login = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit(submit) }>
      <Field
        name='username'
        type='text'
        component={ renderField }
        label='Username'
      />
      <Field
        name='password'
        type='password'
        component={ renderField }
        label='Password'
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type='submit' disabled={ submitting }>Log In</button>
        <button type='button' disabled={ pristine || submitting } onClick={ reset }>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'login' })(Login);
