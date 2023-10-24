import React from "react";
import Taskform from "./Taskform";
import Task from "./Task";
import useTaskmanager from "./Taskmanager"; 
import { Container } from "@chakra-ui/react";

function Tasklist() {
  const { tareas, agregarTarea, eliminarTarea, completarTarea, editarTarea } =
    useTaskmanager();

  return (
    <>
      <Taskform onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default Tasklist;
