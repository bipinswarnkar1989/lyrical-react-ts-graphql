import { FC } from 'react';
import {
    Switch,
    Route,
  } from 'react-router-dom';
import { Home } from './pages/home/Home';

  export const Routes: FC = () => (
      <Switch>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
  )