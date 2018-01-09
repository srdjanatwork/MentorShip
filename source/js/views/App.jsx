import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />

        <div className='Page'>
          <Switch>
            <Route exact path={ routeCodes.HOME } component={ Home } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
