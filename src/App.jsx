import React, { useEffect } from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";
import { Box, Heading, Button, Flex, Stack, Text, Container,Image} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";


function App() {
  return (
    <Box margin={"10"} display="flex" alignItems="baseline">
      <div className="tareas-lista-principal">
        <Heading
          textAlign="center"
          textTransform="uppercase"
          color={"GrayText"}
          fontFamily={"cursive"}
        >
          My Task
        </Heading>

        <Tasklist fontFamily={"cursive"} />
      </div>
    </Box>
  );
}

export default App;
