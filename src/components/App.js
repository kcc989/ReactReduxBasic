import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from '../config/configureStore';
import Counter from './Counter';
import Nav from './Nav';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <ConnectedRouter history={history}>
        <>
          <Switch component={Nav}>
            <Route path="/" component={Counter} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
