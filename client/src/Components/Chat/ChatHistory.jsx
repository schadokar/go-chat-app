import React from 'react';

import { Text, Box, Container } from '@chakra-ui/react';
import './Chat.css';

const ChatHistory = (currentUser, chats) => {
  const history = chats.map(m => {
    // incoming message on left side
    let margin = '0%';
    let bgcolor = 'darkgray';
    let textAlign = 'left';

    if (m.from === currentUser) {
      // outgoing message to right
      margin = '20%';
      bgcolor = 'teal.400';
      textAlign = 'right';
    }

    const ts = new Date(m.timestamp * 1000);

    return (
      <Box
        key={m.id}
        textAlign={textAlign}
        width={'80%'}
        p={2}
        marginTop={2}
        marginBottom={2}
        marginLeft={margin}
        paddingRight={2}
        bg={bgcolor}
        borderRadius={20}
      >
        <Text> {m.message} </Text>
        <Text as={'sub'} fontSize="xs">
          {' '}
          {ts.toUTCString()}{' '}
        </Text>
      </Box>
    );
  });

  return <Container>{history}</Container>;
};

export default ChatHistory;
