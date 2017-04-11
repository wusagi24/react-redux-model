import React from 'react';
import { Route, Switch } from 'react-router';

import AppBar from './AppBar';
import ListContainer from '../containers/MusicListContainer';

function Router() {
  const title = 'music list';

  return (
    <div>
      <AppBar title={title} />
      <Switch>
        <Route exact path="/list" component={ListContainer} />
        <Route component={ListContainer} />
      </Switch>
    </div>
  );
}

export default Router;
