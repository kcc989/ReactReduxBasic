import produce from 'immer';

import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  activities: null,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_ACTIVITIES_STARTED: {
        draft.loading = true;
        draft.error = null;
        draft.activities = null;
        return draft;
      }
      case types.FETCH_ACTIVITIES_FAILED: {
        draft.loading = false;
        draft.error = action.payload;
        draft.activities = null;
        return draft;
      }
      case types.FETCH_ACTIVITIES_COMPLETED: {
        draft.loading = false;
        draft.error = null;
        const activitiesMap = {};

        action.payload.forEach(activity => {
          if (!(activity.type in activitiesMap)) {
            activitiesMap[activity.type] = [];
          }

          activitiesMap[activity.type].push(activity);
        });

        draft.activities = activitiesMap;
        return draft;
      }
      default:
        return draft;
    }
  });
