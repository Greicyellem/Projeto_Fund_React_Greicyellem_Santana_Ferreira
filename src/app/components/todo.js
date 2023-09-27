import React from 'react'
import 'tailwindcss/tailwind.css'
import { BsTrash } from 'react-icons/bs';
import { BsPatchCheck } from 'react-icons/bs';



const todo = ( { todo, removeTodo, completeTodo } )  => {
  return (
<div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "" }}> 
        <div class="content"> 
        <p className='text-gray-700 font-semibold'> {todo.text} </p>
        <p className='text-gray-700'> ({todo.category}) </p>
        </div>
          <div>
            <button title='Concluir tarefa' className="complete" onClick={() => completeTodo (todo.id)}> <BsPatchCheck/> </button> 
            <button title='Remover tarefa' className="remove" onClick={() => removeTodo(todo.id)}> <BsTrash/> </button> 
          </div>
      </div> 
 );
};

export default todo