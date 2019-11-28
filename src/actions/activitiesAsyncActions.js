import * as ActivitiesClient from '../api/ActivitiesClient';
import * as types from './actionTypes';

export function getActivities() {
  return dispatch => {
    dispatch({ type: types.FETCH_ACTIVITIES_STARTED });

    return ActivitiesClient.getActivities().then(
      response =>
        dispatch({
          type: types.FETCH_ACTIVITIES_COMPLETED,
          payload: response.data,
        }),
      error =>
        dispatch({ type: types.FETCH_ACTIVITIES_FAILED, payload: error }),
    );
  };
}
