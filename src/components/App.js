import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import NewUser from './NewUser';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';
import Dashboard from './Dashboard';
import PhotoViewer from './PhotoViewer';

const App = () => {
  return (
    <BrowserRouter>
      <div id="App">
        <BurgerMenu />
        <div id="page-wrap">
          <Nav />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/new-user" component={NewUser} />
            <Route path="/photo-viewer" component={PhotoViewer} />
            <Route render={() => <Redirect to="/new-user" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
