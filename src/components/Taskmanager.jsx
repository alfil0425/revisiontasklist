import { useState, } from "react";

function useTaskmanager() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        setTareas([...tareas, tarea]);
    }
    };

    const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
        if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
    };

    const editarTarea = (id, nuevoTexto) => {
    const tareasActualizadas = tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    );
    setTareas(tareasActualizadas);
    };

    return { tareas, agregarTarea, eliminarTarea, completarTarea, editarTarea };
}

export default useTaskmanager;
