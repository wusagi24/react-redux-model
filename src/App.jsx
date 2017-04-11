import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Router from './components/Router';
import configStore from './store/configureStore';
import muiCustomTheme from './constants/muiCustomTheme';

const muiTheme = getMuiTheme(muiCustomTheme);
const history = createHistory();
const store = configStore(history);

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
