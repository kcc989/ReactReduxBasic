import React from 'react';
import PropTypes from 'prop-types';
import { Heading, ListItem } from 'evergreen-ui';
import { useHistory } from 'react-router-dom';

const Role = ({ id, name }) => {
  const history = useHistory();

  return (
    <ListItem
      onClick={() => history.push(`role/${id}`)}
      style={{ cursor: 'pointer' }}
      px={3}
    >
      <Heading>{name}</Heading>
    </ListItem>
  );
};

Role.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Role;
