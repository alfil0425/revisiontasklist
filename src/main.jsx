import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
/*import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "./imagenes/back.jpg.jpg"*/
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(

  
    <ChakraProvider>
      <App />
    </ChakraProvider>
  
);
