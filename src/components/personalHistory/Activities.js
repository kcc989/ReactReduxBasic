import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from 'reflexbox';

import Activity from './Activity';

const Activities = ({ activities }) => {
  if (!activities) {
    return null;
  }

  return (
    <Flex width={1} flexWrap="wrap">
      {Object.values(activities)
        .flat()
        .map(activity => {
          return (
            <Activity
              key={activity.id}
              startDate={activity.startDate}
              name={activity.name}
              description={activity.description}
              roles={activity.roles}
              type={activity.type}
            />
          );
        })}
    </Flex>
  );
};

Activities.propTypes = {
  activities: PropTypes.object.isRequired,
};

export default Activities;
