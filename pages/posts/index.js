import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "@/app/components/Title";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "@/app/components/Footer";
import { BsTrash } from 'react-icons/bs';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', body: '', userId: ''});
    const {register, handleSubmit, formState: { errors }} = useForm();

    useEffect(() => {
        const loadPosts = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log('Resposta da API (get):', response.data)
                setPosts(response.data)

            } catch (error) {
                console.log('Error ao carregar o get:', error)
            }
        }
        loadPosts();
    }, []);

    const onSubmit = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            console.log('Resposta da API (post): ', response.data)
            setPosts([response.data, ...posts])
            setNewPost({ title: '', body: '', userId: ''})
        } catch (error) {
            console.log(error);
            
        }
    }

    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`, newPost)
            if(response){
                console.log('Resposta da API (delete): Deletado com sucesso!')
                alert('Sua tarefa foi excluída com sucesso!')
            }
            const updatedPosts = posts.filter((post) => post.id !== postId)
            setPosts(updatedPosts)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return(

        <div>
            <Layout>
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>
            <Title> Tarefas concluídas </Title>

            <p className="flex justify-center text-gray-700 font-bold pb-5"> Incluir tarefas concluídas: </p>

            <form className="flex justify-center items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Titulo da tarefa"
                    {...register('title', {
                        required: 'Título é um campo obrigatório',
                        minLength: {value: 3, message: 'O campo título da tarefa deve ter 3 caracteres ou mais!'},
                        maxLength: {value: 50, message: 'O campo título da tarefa deve ter no máximo 50 caracteres!'},
                    })}
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="border rounded py-2 px-3"
                />
                <input 
                    placeholder="Observações"
                    {...register('body', {
                        required: 'Observações é um campo obrigatório',
                        minLength: {value: 50, message: 'O campo observações do post deve ter 50 caracteres ou mais!'},
                        maxLength: {value: 500, message: 'O campo observações do post deve ter no máximo 500 caracteres!'},
                    })}
                    value={newPost.body}
                    onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                    className="border rounded py-2 px-3 mt-4 mb-5"
                    />
                <button
                title='Incluir tarefa concluída'
                    className="bg-rose hover:bg-gray-300 text-gray-700 font-bold p-2 rounded mb-5"
                    > 
                Incluir
                </button>
            </form>
            
            <p className="flex justify-center text-gray-700 font-bold pb-5 "> Clique no título da tarefa para ter acessos às observações </p>

            {errors.title && <span> {errors.title.message}</span>}
            {errors.body && <span> {errors.body.message}</span>}

            <div className="m-8 max-w-6xl items-center justify-center mx-auto">
                <ul className="bg-opacity-80 m-8 p-4 rounded mt-5">
                {posts.map((post) => (
                    <div className="flex shadow-md rounded p-8 mb-4 mt-6 bg-rose bg-opacity-60">
                        <li key={post.id}>
                            <strong>Título da tarefa: </strong>
                            <Link
                                href={`/posts/${post.id}`}
                               
                            >
                                {post.title}
                            </Link> 
                            <p><strong>Observações: </strong>{post.body}</p>
                        </li>

                        <button
                            onClick={() => deletePost(post.id)}
                            title='Remover tarefa'
                            className="text-gray-700 py-2 px-4 rounded font-display flex items-center text-2xl"
                        > 
                            <BsTrash/> 
                        </button>
                    </div>
                ))}
                </ul>
            </div>
            </Layout>

            <Footer/>
        </div>
    )
}

export default Posts;