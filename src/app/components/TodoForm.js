import {createFactory, useState} from 'react';
import React from "react";
import 'tailwindcss/tailwind.css'


const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("") 
    const [category, setCategory] = useState ("");

    const  handleSubmit = (e) => {
        if (!value || !category) return;
        e.preventDefault ();
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

  return (
    <div className="todo-form"> 
        <h2 className="flex flex-col items-center font-semibold text-gray-600  text-2xl pb-5 drop-shadow-md"> Criar nova tarefa: 
        
        
        </h2>
        <form onSubmit={handleSubmit}>
            <input className='text-gray-700 p-1' type="text" 
            placeholder="Digite para criar uma nova tarefa..." 
            
            value = {value}
            onChange={(e) => setValue (e.target.value)}
            
          />
            <select className='text-gray-700 p-1 m-2' value = {category} onChange={(e) => setCategory (e.target.value)}>  
            <option value=""> Selecione uma categoria</option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Pessoal"> Pessoal </option>
            <option value="Estudos"> Estudos </option>
            </select> 

            <button className=" text-gray-700 flex bg-white hover:bg-red-100 border p-2 rounded-xl	mt-3 " type="submit">Criar tarefa</button>

        </form>

    </div>
  )
}

export default TodoForm