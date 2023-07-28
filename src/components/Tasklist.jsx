import React, { useState } from "react";
import Taskform from "./Taskform";
import Task from "./Task";

function Tasklist () {

    const [tareas, setTareas]= useState ([]);

    const agregarTarea = tarea => { 
        
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            localStorage.setItem("tareas", JSON.stringify([...tareasActualizadas]))
        }    
    }  

    const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
    const tareasActualizadas = tareas.map (tarea => {
        if (tarea.id === id) { 
            tarea.completada = !tarea.completada;
    }

    /*const editarTarea =(id) => {
        const tareasActualizadas = tareas.map (tarea => {
        tarea.id === id ? { ...tarea, texto: "tareasActualizadas"} : tarea
    });
    }*/

        
        return tarea;
    });
    setTareas(tareasActualizadas);
    };
    return (
    <>
        <Taskform onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
        {
        tareas.map((tarea) => 
            <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} 
            /*qgieditarTarea={editarTarea}*/
            />
        
        )
        }
        </div>
    </>
    );
}

export default Tasklist;
