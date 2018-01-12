/* eslint react/prop-types: 0 */
/* eslint-env es6 */
import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      userNameValue: '',
    };

    this.logoutForm = this.logoutForm.bind(this);
  }
  submit = ({ userName = '', email = '' }) => {
    const error = {};
    let isError = false;

    if (userName.trim() === '') {
      error.userName = 'Username is empty';
      isError = true;
    }

    if (email.trim() === '') {
      error.email = 'Email is empty';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.setState({ isLogged: true });
    }
  }

  handleUserName(event) {
    this.setState({
      userNameValue: event.target.value,
    });
  }

  logoutForm() {
    this.setState({
      isLogged: false,
    }, () => this.clearForm());
  }

  clearForm() {
    this.setState({
      userNameValue: '',
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { isLogged, userNameValue } = this.state;
    const renderField = ({
      label, input, type, meta: { touched, error },
    }) => (
      <div>
        <label htmlFor={ input.name }>{ label }
          <input { ...input } type={ type } />
          { touched && error &&
            <span>{error}</span>
          }
        </label>
      </div>
    );
    return (
      <div>
        {!isLogged ?
          <form className='form' onSubmit={ handleSubmit(this.submit) }>
            <Field
              onChange={ (event) => this.handleUserName(event) }
              name='userName'
              component={ renderField }
              type='text'
              label='Username'
            />
            <Field name='email' component={ renderField } type='email' label='Email' />
            <button type='submit'>Login</button>
          </form> :
          <div>
            <p>Welcome, { userNameValue }</p>
            <button type='submit' onClick={ this.logoutForm }>Logout</button>
          </div>
      }
      </div>
    );
  }
}

Login = reduxForm({
  form: 'contact',
})(Login);

export default Login;
