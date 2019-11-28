import React from 'react';
// import PropTypes from 'prop-types';
import { Card, SideSheet, Pane, Heading, Paragraph } from 'evergreen-ui';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  return (
    <>
      <SideSheet
        isShown
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
        onCloseComplete={() => history.push('/')}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Title</Heading>
            <Paragraph size={400}>Optional description or sub title</Paragraph>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Some content</Heading>
          </Card>
        </Pane>
      </SideSheet>
    </>
  );
};
