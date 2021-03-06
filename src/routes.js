import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Chat from './pages/Chat'
import Profile from './pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
