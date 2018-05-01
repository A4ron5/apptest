import React, { Component } from 'react';
import { App } from './features/app'
import { Articles } from './features/articles'
import { Login } from './features/login'
import { Profile } from './features/profile'

import { store } from './store'
import { Provider } from 'react-redux' 
import { Route, BrowserRouter, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <App>
              <Route path='/news' component={Articles}/>
              <Route path='/login' component={Login}/>
              <Route path='/profile/:id' component={Profile}/>
            </App>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Main;
