import React from "react";
import 'tailwindcss/tailwind.css'


const Filter = ({filter, setFilter, setSort} ) => {
  return (
    <div className=''>
        <h2 className="flex flex-col items-center pb-2 font-semibold text-gray-600  text-2xl drop-shadow-md	 "> Filtrar tarefas: </h2>
        <div>
            <div className="flex flex-col items-center mr-20 ml-20 pb-10 text-gray-700"> 
                <select className="p-1" value={filter} onChange={(e) => setFilter(e.target.value)}> 
                    <option value="All">Todas</option>
                    <option value="Completed">Completa</option>
                    <option value="Incomplete">Incompleta</option>
                </select>            
            </div>    
           
        </div>
    </div>
  )
}

export default Filter