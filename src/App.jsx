
import React from 'react'
import './App.css'
import toDoList from "./assets/toDoList.png";
// import Tarea from "./componentes/Tarea";
// import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';

function App() {
  
  return (
    <>
      <div className='AppTareas'>
        <div className='contenedorImagen'>
           <img src={toDoList}
            className='toDo' 
            alt="imagen titulo lista" 
            />
        </div>
        <div className='listaTareasPrincipal'>
          <h1>Mis tareas</h1>
          {/* <Tarea texto="Aprender React"/> */}
          <TaskList />
        </div>
      </div>
    </>
  )
}

export default App;
