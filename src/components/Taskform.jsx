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
    setInput(""); // Limpia el input después de enviar la tarea
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Write Task"
        name="texto"
        value={input} // Asigna el valor del input al estado input
        onChange={manejarCambio}
      />
      <button className="tarea-boton" type="submit">
        AddTask
      </button>
    </form>
  );
}

export default Taskform;
