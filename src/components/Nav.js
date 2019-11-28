import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'reflexbox';
import { Tab, TabNavigation } from 'evergreen-ui';

export default () => {
  const activities = useSelector(state => state.activities.activities);

  if (!activities) {
    return null;
  }

  return (
    <Flex alignItems="center">
      <Flex width={1 / 4} />
      <Flex width={1 / 2}>
        <TabNavigation marginX="auto">
          {Object.keys(activities).map((tab, index) => (
            <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
              {tab}
            </Tab>
          ))}
        </TabNavigation>
      </Flex>
      <Flex width={1 / 4} />
    </Flex>
  );
};
