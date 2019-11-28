import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import activities from './activities';
import counter from './counter';

const createRootReducer = history =>
  combineReducers({
    activities,
    counter,
    router: connectRouter(history),
  });

export default createRootReducer;
