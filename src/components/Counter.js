import React, { useEffect } from 'react';
import { Pane, Spinner } from 'evergreen-ui';
import { Flex } from 'reflexbox';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router'; // react-router v4/v5

import { getActivities } from '../actions/activitiesAsyncActions';

import Activities from './personalHistory/Activities';
import RoleDetails from './personalHistory/RoleDetails';

function Counter() {
  const activities = useSelector(state => state.activities.activities);
  const error = useSelector(state => state.activities.error);
  const loading = useSelector(state => state.activities.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !error && !activities) {
      dispatch(getActivities());
    }
  });

  if (loading || loading === null || !activities) {
    return (
      <Pane marginX="auto" marginY={400}>
        <Spinner />
      </Pane>
    );
  }

  return (
    <Flex flexWrap="wrap">
      <Flex width={1 / 5} />
      <Flex width={1 / 2} alignContent="center">
        <Activities activities={activities} />
      </Flex>
      <Route path="/role/:id" component={RoleDetails} />
    </Flex>
  );
}

export default Counter;
