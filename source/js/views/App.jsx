import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import Example from 'views/Example/Example';
import Page1 from 'views/Page1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MuiThemeProvider store={ store }>
          <React.Fragment>
            <Menu />
            <div className='Page'>
              <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path={ routeCodes.PAGE1 } component={ Page1 } />
                <Route exact path={ routeCodes.EXAMPLE } component={ Example } />
              </Switch>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default hot(module)(App);
