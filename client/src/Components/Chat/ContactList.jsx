import React from 'react';

import { Text, Box, Divider } from '@chakra-ui/react';

const ContactList = (contacts, sendMessage) => {
  const contactList = contacts.map(c => {
    const ts = new Date(c.last_activity * 1000);

    return (
      <div key={c.username}>
        <Box
          as="button"
          textAlign={'left'}
          key={c.username}
          p={2}
          marginTop={2}
          marginBottom={2}
          paddingRight={2}
          borderRadius={20}
          borderColor="-moz-initial"
          borderBottomColor={'whiteAlpha.500'}
          onClick={() => sendMessage(c.username)}
        >
          <Text> {c.username} </Text>
          <Text as={'sub'} fontSize="xs">
            {' '}
            {ts.toDateString()}{' '}
          </Text>
        </Box>
        <Divider></Divider>
      </div>
    );
  });

  return contactList;
};

export default ContactList;
