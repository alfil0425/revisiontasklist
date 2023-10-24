import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

function Task ({ id, texto, completada, completarTarea, eliminarTarea, editarTarea  }) {

    return (
    <div
        className={
    completada ? "tarea-contenedor-completada" : "tarea-contenedor"
        }
    >
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
        </div>
        <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
        >
        <AiTwotoneDelete className="tarea-icono" />
        </div>
        <div
        className="tarea-contenedor-iconos"
        onClick={() => editarTarea(id)}
        >
        <AiFillEdit className="tarea-icono" />
        </div>
    </div>
    );
}

export default Task;
