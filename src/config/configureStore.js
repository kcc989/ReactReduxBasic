import { compose, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers/rootReducer';

export const history = createBrowserHistory();

export default function configureStore() {
  return createStore(
    createRootReducer(history),
    compose(applyMiddleware(thunk), applyMiddleware(routerMiddleware(history))),
  );
}
