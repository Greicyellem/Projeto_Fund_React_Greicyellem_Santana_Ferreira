"use client"
import {useState} from 'react';
import Search from './components/Search';
import Filter from './components/Filter'
import Todo from './components/todo';
import TodoForm from './components/TodoForm';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  const [ todos, setTodos] = useState([
    {
      id: 1,
      text: "Projeto de Desenvolvimento Web com React",
      category: "Trabalho",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
      },

    {
      id: 3,
      text: "Estudar Programação",
      category: "Estudos",
      isCompleted: false,
    },
    
  ]);

  const [ search, setSearch ] = useState("");
  const [ filter, setFilter ] = useState("All");
  const [ sort, setSort ] = useState("Asc");

  

  const addTodo = (text, category) => {
    const newTodos = [... todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      },
    ]; 

    setTodos (newTodos);
  };
  

    const removeTodo = (id) => {
      const newTodos = [ ...todos ] 
      const filteredTodos = newTodos.filter (todo =>  todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
    };

    const completeTodo = (id) => {
      const newTodos = [ ...todos ]
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo) 
      setTodos(newTodos);

    }

  return (  
    <Layout>
      <Navbar></Navbar>
      <main className='app'>
        
    <div>
    <h1 className=' text-gray-600 text-3xl font-bold m-8 flex flex-col items-center drop-shadow-md'> Lista de Tarefas </h1>
    <Search search={search} setSearch={setSearch}> </Search>

    <Filter filter={filter} setFilter={setFilter} setSort={setSort}> </Filter>
    <div className="todo-list"> 
      {todos
      .filter((todo) => 
      filter === "All"
       ? true 
       : filter === "Completed"
       ? todo.isCompleted 
       : !todo.isCompleted
       )
      .filter((todo) => 
      todo.text.toLowerCase().includes(search.toLowerCase())
      ) 

      .sort((a, b) => sort === "Asc" 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text)
      )

      .map((todo) => ( 
       <Todo key={todo.id} 
       todo = {todo} 
       removeTodo={removeTodo} 
       completeTodo ={completeTodo}> </Todo>

      ))}
    </div> 
    <TodoForm addTodo = {addTodo}> </TodoForm>

  </div> 
  </main>
  <Footer/>
    </Layout>
  );
}

export default App;
