import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Taskform(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);

    setInput(""); 
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Write Task"
        name="texto"
        value={input}
        onChange={manejarCambio}
      />

      <Button
        size="md"
        height="48px"
        width="100px"
        border="2px"
        borderColor="yellow.500"
        className="tarea-boton"
        type="submit"
        padding={"5%"}
        margin={"1%"}
      >
        Add Task
      </Button>
    </form>
  );
}

export default Taskform;
