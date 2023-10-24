import React, { useEffect } from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";
import { Box, Heading, Button, Flex, Stack, Text, Container} from "@chakra-ui/react";
import bgImage from "./imagenes/coffe.jpeg";

function App() {
  return (
    <Container bgImage={`url($(bgImage))`}>
      
      
      <div className="tareas-lista-principal">
        <Heading fontFamily="" textAlign="center" textTransform="uppercase">
            My Task
          </Heading>
        

        <Tasklist />
      </div>
    </Container>
  );
}

export default App;
