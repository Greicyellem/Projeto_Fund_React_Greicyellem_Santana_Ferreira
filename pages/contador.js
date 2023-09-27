import React, { useState } from "react";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import { BsPatchPlus } from "react-icons/bs";
import { BsPatchMinus } from "react-icons/bs";
import "tailwindcss/tailwind.css";

const ContadorApp = () => {
  let [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <Layout>
        <Navbar></Navbar>


        <div 
        className="m-8 flex flex-col items-center p-5 text-gray-700 font-semibold rounded text-center text-2xl" >
          <h1>Tarefas a serem realizadas</h1>
          <br></br>
          <p>Contagem: {contador} </p>

        </div>         

        <div className="flex justify-center items-center text-gray-700 font-semibold text-4xl" >
          <button
            title="remover 1 tarefa"
            onClick={decrementar}
            className=" px-4 text-4xl"

          >
            <BsPatchMinus />
          </button>

          <button
            title="adicionar 1 tarefa"
            onClick={incrementar}
            className=" px-4 text-4xl"
          >
            <BsPatchPlus />
          </button>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


         <Breadcrumbs></Breadcrumbs>
        <Footer />
      </Layout>

    </div>
  );
};

export default ContadorApp;
