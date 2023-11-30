//con {useState} importamos el hook
import React,{ useState }  from "react";
import TaskForm from "./TaskForm";
import Tarea from "./Tarea";
import "../styleSheets/TaskList.css";

// lista de componentes
function TaskList () {
    //setTareas es el nombre del estado que quiero actualizar. 
  // A useState le paso el valor de un arreglo vacío para que asi se inicialice. UseState es el hook que importe
  //array de objetos
  const [tareas, setTareas] = useState([]);

//   al agregar 1 tarea recibo tarea como argumento
  const agregarTarea= tarea => {
    if(tarea.texto.trim()){
        //trim saca los espacios del principio y del final
        tarea.texto= tarea.texto.trim();
        // spread ---> (...) paso cada tarea del arreglo a una individual
        const tareasActuales=[tarea, ...tareas];
        setTareas(tareasActuales);
    }
  }

  const eliminarTarea = id =>{
    //si cumple condicion se agrega al arreglo
    const tareasActuales= tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActuales);
  }

  const checkTarea = id => {

    const tareasActuales= tareas.map(tarea => {
        if(tarea.id === id){
            tarea.check= !tarea.check;
        }
        return tarea;
    });

    setTareas(tareasActuales);

  }

    return(
        <>
            <TaskForm onSubmit={ agregarTarea }/>
            <div className="taskListContainer">
                {/* Aca uso el estado inicial(array vacio) o el estado en cualquier momento especifico(cuando agrego una tarea nueva) para mostrar la/s tarea/s y mantenerla/s */}
                {
                    // map toma cada tarea,y pasa cada una como argumento para otra funcion y va a hacer lo q yo le especifique.
                    // tarea es el objeto del array
                    tareas.map((tarea) =>
                    // creacion de un componente para c/ tarea del arreglo.Cada tarea es un objeto en el array
                    <Tarea
                    //para que pase la tarea en orden
                    key= { tarea.id }
                    id={ tarea.id }
                    // cada tarea tiene un texto especifico
                    texto={ tarea.texto }
                    check={ tarea.check }
                    checkTarea={ checkTarea }
                    //se pasa como props para q se elimine cuando clickeo el icono
                    eliminarTarea={ eliminarTarea }
                    />
                    )
                }
            </div>
        
        
        </>
    )
}

export default TaskList;