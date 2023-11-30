import React, { useState } from "react";
import "../styleSheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";
function TaskForm(props){

    const [input, setInput]= useState("");

    //Para controlar el cambio al agregar una tarea
    const cambioFormulario= e => {
        //extraer valor del campo texto
        setInput(e.target.value);
        // console.log(e.target.value);
    }

    //Para controlar el envio. e es un evento automatico al agregar una tarea.
    const envioFormulario = e => {
        e.preventDefault();
        console.log("enviando formulario");
        const nuevaTarea={
            id: uuidv4(),
            texto:input,
            check:false
        }

        props.onSubmit(nuevaTarea);

    }

    return(
        <form className="tareaFormulario" onSubmit={ envioFormulario }>
            <input
                className="tareaInput"
                type="texto"
                placeholder="Agrega una tarea..."
                name="texto"
                // even listener
                onChange= { cambioFormulario }
            />
            <button className="tareaBoton">
                Agregar tarea
            </button>
        </form>
    )
}

export default TaskForm;