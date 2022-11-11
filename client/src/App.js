import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Header from './Components/Header';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Login from './Components/Login';
import Chat from './Components/Chat/Chat';
import Footer from './Components/Footer';

// theme.styles.global['font-family'] = 'roboto';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="right">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
