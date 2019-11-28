import produce from 'immer';

import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.INCREMENT_COUNT: {
        draft.count += 1;
        return draft;
      }
      default:
        return draft;
    }
  });
