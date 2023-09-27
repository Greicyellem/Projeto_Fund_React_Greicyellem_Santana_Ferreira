import React from "react";
import 'tailwindcss/tailwind.css'

const Search = ({Search, setSearch}) => {
  return ( 
    <div className="flex flex-col items-center pb-10 mr-20 ml-20 ">
        <h2 className="font-semibold text-gray-600 drop-shadow-md text-2xl pb-3"> Pesquisar tarefas: </h2> 
        <input className='p-1' type="text" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar uma tarefa..." />
        </div>
)
}

export default Search;