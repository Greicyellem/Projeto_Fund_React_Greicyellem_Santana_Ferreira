import Breadcrumbs from "@/app/components/Breadcrumbs";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import React from "react";

const About = () => {
    return(
        <div className=" ">
            <Layout> 
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>

        <div className="flex justify-center items-center flex-col text-gray-700 m-8 bg-white bg-opacity-80 rounded p-4"> 
        <h1 className=" m-8 font-bold text-2xl">Gerenciador de tarefas online: sua solução para uma vida organizada! </h1>

        <img 
            src="        https://img.freepik.com/vetores-gratis/conjunto-plano-de-gerenciamento-de-tempo-de-icones-de-cronograma-de-trabalho-de-cronometro-de-ampulheta-multitarefa-e-ilustracao-vetorial-isolada-de-processos-de-negocios-de-planejamento-de-pessoas_1284-73994.jpg?w=1380&t=st=1695406149~exp=1695406749~hmac=578c4153e3d6f394f5ad83ea9c795847765aad4a2295a93f0e79166185dee95b
            "
            width={1300}
            className="items-center opacity-80" 

            
            />
            <p> No mundo agitado de hoje, manter-se organizado é essencial para alcançar o sucesso e reduzir o estresse. Uma página web de gerenciador de tarefas se tornou uma ferramenta indispensável para pessoas de todas as esferas da vida que desejam manter suas atividades sob controle. Neste texto, exploraremos uma página web de gerenciador de tarefas de última geração que vai revolucionar a maneira como você planeja e executa suas responsabilidades diárias.</p>
<br></br>
           

            <h2 className="m-8 font-bold	">Interface intuitiva e amigável </h2>  
            <p> A primeira coisa que você notará ao acessar nossa página web de gerenciador de tarefas é a interface intuitiva e amigável. 
            Não importa se você é um novato ou um usuário experiente, nossa plataforma foi projetada para ser simples de usar, com uma curva de aprendizado suave. Os recursos estão dispostos de forma organizada e os ícones são autoexplicativos, o que significa que você pode começar a usar a plataforma imediatamente, sem perder tempo com tutoriais complexos.</p>


            <h2 className="m-8 font-bold">Gerenciamento de Tarefas Eficiente </h2>  
            <p>O coração de qualquer bom gerenciador de tarefas é a capacidade de adicionar, editar e organizar suas tarefas de maneira eficiente. Nossa página web permite que você crie tarefas com facilidade, atribua datas de vencimento, prioridades e categorias. Você pode até mesmo adicionar notas e anexos para manter todas as informações relevantes em um só lugar. Com a capacidade de arrastar e soltar, reorganizar suas tarefas nunca foi tão simples.</p>
            
            <img 
            src="https://img.freepik.com/fotos-gratis/agenda-de-agenda-digital-de-calendario-online_107791-17725.jpg?w=1380&t=st=1695406043~exp=1695406643~hmac=8cc3c2ee0fd4372d503faa1f22002769e1fe9c0498d38db4275427b929302920"
            width={1300}
            className="items-center opacity-80" 

            
            />

            <h2 className="m-8 font-bold">Colaboração em tempo real </h2>  
            <p>Se você está trabalhando em equipe, nossa página web de gerenciador de tarefas oferece recursos de colaboração em tempo real. Você pode compartilhar listas de tarefas com colegas de trabalho, amigos ou familiares, atribuir tarefas específicas a indivíduos e receber notificações instantâneas sobre atualizações. Isso garante que todos estejam na mesma página e que as tarefas sejam concluídas de maneira eficaz.</p>

          

            <h2 className="m-8 font-bold">Acompanhamento de progresso e relatórios detalhados</h2>  
            <p>Para acompanhar o progresso das suas tarefas, nossa página web oferece gráficos e relatórios detalhados. Você pode visualizar estatísticas sobre suas atividades, como o número de tarefas concluídas por semana, a distribuição de tarefas por categoria e muito mais. Isso ajuda a identificar áreas em que você pode melhorar sua produtividade e eficiência.</p>


            </div>

            <Footer/>
            </Layout>

            
        </div>
    )
}

export default About;