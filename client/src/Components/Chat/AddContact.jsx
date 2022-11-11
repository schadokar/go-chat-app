import React, { Component } from 'react';

import {
  Container,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
  Input,
  Box,
} from '@chakra-ui/react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      isInvalid: false,
      endpoint: '/add-contact',
    };
  }

  // on change of input, set the value to the message state
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // sendMsg(this.state.message);

    this.setState({ message: '' });
    // on error change isInvalid to true and message
  };

  render() {
    return (
      <Container paddingBottom={2}>
        <Box>
          <FormControl isInvalid={this.state.isInvalid}>
            <InputGroup size="md">
              <Input
                variant="flushed"
                type="text"
                placeholder="Add Contact"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              <InputRightElement width="6rem">
                <Button colorScheme={'teal'} h="2rem" size="lg">
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
            {!this.state.isInvalid ? (
              ''
            ) : (
              <FormErrorMessage>username does not exist</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </Container>
    );
  }
}

export default AddContact;
