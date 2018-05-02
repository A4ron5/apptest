import React, { Component } from 'react';
import { App } from './features/app'
import { Articles } from './features/articles'
import { Login } from './features/login'
import { Profile } from './features/profile'
import { NotFound } from './features/notfound'
import { Home } from './features/home'
import { PrivateRoute } from './features/private-route'

import { store } from './store'
import { Provider } from 'react-redux' 
import { Route, BrowserRouter, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <App>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/news' component={Articles}/>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/profile' component={Profile}/>
                <Route component={NotFound}/>
              </Switch>
            </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Main;
