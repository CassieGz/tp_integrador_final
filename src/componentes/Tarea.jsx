import React from "react";
import "../styleSheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

// props que voy a pasar(identificador de tarea unica,texto,tarea completada,completar una tarea,eliminar tarea). los 2 ultimos son funciones
function Tarea({ id, texto, check, checkTarea, eliminarTarea }) {

    return(
        // clase condicional al cumplimiento: si ? la tarea esta completada(true) usamos la clase contenedorTareas check, si no : (false)contenedorTareas
        <div className= { check ? "contenedorTareas check" : "contenedorTareas" }>
            <div
            className="tareaTexto"
            onClick={ () => checkTarea(id) }>
                {texto}  
            </div>
            <div
            className="tareaContainerIcono"
            //llamada a funcion anonima
            onClick={ () => eliminarTarea(id) }>
          {/* icono es un componente de react porque instale react-icons. La clase se pasa como props*/}
             <AiOutlineCloseCircle className="tareaIcono" />
            </div>
        </div>
    )
    
}

export default Tarea;