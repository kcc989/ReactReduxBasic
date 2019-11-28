import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Heading, Paragraph, Text, UnorderedList } from 'evergreen-ui';
import { Flex, Box } from 'reflexbox';

import Role from './Role';

const renderActivityTime = (startDate, endDate) => {
  const startString = moment(startDate).format('MMMM YYYY');
  if (endDate) {
    const endString = moment(endDate).format('MMMM YYYY');
    return `${startString} until ${endString}`;
  }
  return `${startString} to Present`;
};

const renderRoles = roles => {
  const sortedRoles = roles
    .slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <UnorderedList icon="success">
      {sortedRoles.map(role => (
        <Role key={role.id} id={role.id} name={role.name} />
      ))}
    </UnorderedList>
  );
};

const Activity = ({
  startDate,
  endDate = null,
  name,
  type,
  description,
  roles,
}) => {
  return (
    <Flex flexWrap="wrap" mx={-2}>
      <Box px={2} py={2} width={2 / 3}>
        <Heading size={800}>{name}</Heading>
      </Box>
      <Box px={2} py={2} width={1 / 3} />
      <Box px={2} width={1 / 2}>
        <Paragraph p={1} color="background" bg="primary">
          <Text>{renderActivityTime(startDate, endDate)}</Text>
        </Paragraph>
      </Box>
      <Box px={2} py={2} width={1 / 2} />
      <Box px={2} py={2} width={1 / 8} />
      <Box px={2} py={2} width={7 / 8}>
        {roles.length > 0 && renderRoles(roles)}
      </Box>
    </Flex>
  );
};

Activity.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Activity;
