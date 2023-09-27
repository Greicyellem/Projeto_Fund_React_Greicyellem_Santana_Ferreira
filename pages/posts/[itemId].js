import Breadcrumbs from "@/app/components/Breadcrumbs";
import Navbar from "@/app/components/Navbar";
import Title from "@/app/components/Title";
import React from "react";
import axios from "axios";
import Layout from "@/app/components/Layout";
import Footer from "@/app/components/Footer";

const PostPage = ({ post, comments }) => {
    return(
        <div>
            <Layout>
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>
            <Title>{post.title}</Title>
            <p className='shadow-md rounded font-semibold p-4 mb-4 m-8 text-gray-700'>{post.body}</p>

            <ul>
            {comments.map((comment) => (
                <div className='shadow-md rounded font-semibold p-4 mb-4 bg-white m-8 text-gray-700'>
                    <li key={comment.id}>
                        <p>Título: {comment.name}</p>
                        <p>Email: {comment.email}</p>
                        <p>Observações: {comment.body}</p>
                    </li>
                </div>
            ))}
            </ul>
            </Layout>
            <Footer> </Footer>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { itemId } = params;
    
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
    const post = postResponse.data;

    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
    const comments = commentsResponse.data;

    return{
        props: {
            post,
            comments
        }, 
    };
}

export default PostPage;
