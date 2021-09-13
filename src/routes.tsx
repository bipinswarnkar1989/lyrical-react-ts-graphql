import { FC } from 'react';
import {
    Switch,
    Route,
  } from 'react-router-dom';

  import { CreateSong } from './pages/create-song/CreateSong';

  export const Routes: FC = () => (
      <Switch>
          <Route path="/">
              <CreateSong />
          </Route>
      </Switch>
  )