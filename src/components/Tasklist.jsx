import React from "react";
import Taskform from "./Taskform";
import Task from "./Task";
import useTaskManager from "./useTaskManager"; // Importa el hook personalizado

function Tasklist() {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager(); // Usa el hook

  return (
    <>
      <Taskform onSubmit={addTask} />
      <div className="tareas-lista-contenedor">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            texto={task.text}
            completada={task.completada}
            completarTarea={() => updateTask(task.id, !task.completada)}
            eliminarTarea={() => deleteTask(task.id)}
            editarTarea={updateTask}
          />
        ))}
      </div>
    </>
  );
}

export default Tasklist;
