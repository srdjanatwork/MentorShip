import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import { Values } from 'redux-form-website-template';
import showResults from '../showResults';
import Login from '../Login/Login';

export default class Example extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => this.setState({ value });
  render() {
    return (
      <div>
        <p className='title'>Example Page</p>
        <div className='exampleWrapper'>
          <div>
            <p>Button(enabled):</p>
            <RaisedButton label='Button' primary={ true } />
          </div>
          <div>
            <p>Button(disabled):</p>
            <RaisedButton label='Button' disabled={ true } />
          </div>
        </div>
        <div className='exampleWrapper'>
          <div>
            <p>Input(default value):</p>
            <TextField
              id='text-field-default'
              defaultValue='Default Value'
            />
          </div>
          <div>
            <p>Input:</p>
            <TextField
              hintText='Hint Text'
              floatingLabelText='Title'
            />
          </div>
        </div>
        <SelectField
          floatingLabelText='Frequency'
          value={ this.state.value }
          onChange={ this.handleChange }
        >
          <MenuItem value={ 1 } primaryText='Option1' />
          <MenuItem value={ 2 } primaryText='Option2' />
          <MenuItem value={ 3 } primaryText='Option3' />
        </SelectField>
        <Login onSubmit={ showResults } />
        {/* <Values form='login' /> */}
      </div>
    );
  }
}
