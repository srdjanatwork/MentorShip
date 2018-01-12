import React, { Component } from 'react';
import { Login } from './Login/Login';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Login />
      </div>
    );
  }
}
