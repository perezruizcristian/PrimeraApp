import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts"

export default function PruebaAxios(){
    const [post, setPost] = React.useState(null);

    React.useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data);
        })
    },[]);  

    function createPost() {
        axios
        .post(baseURL, {
            title: "Titulo Hola",
            body: "This is a new post."
        })
        .then((response) => {
            setPost(response.data);
        });
    }

    function deletePost(){
        axios
        .delete(`${baseURL}/1`)
        .then(()=>{
            alert("Post Eliminado");
            setPost("https://jsonplaceholder.typicode.com/posts/1")
        })
    }

    function updatePost(){
        axios
        .put(`${baseURL}/1`,{
            title : "Titulo Modificado",
            body: "This is a modific post."
        })
        .then((response)=>{
            setPost(response.data);
        });
    }

    //------------------------------
        function handleClick (click){
            axios.get(`${baseURL}/${click}`).then((response)=>{
                setPost(response.data);
                setClick (click+1)
                console.log(click)
            })
        }       

    const [click, setClick] = useState(2)
    //--------------------------------

    function RegenerarPost (click){
        axios.get(`${baseURL}/${click-1}`).then((response)=>{
            setPost(response.data);
            console.log(click)
        })
    }  

    //-------------------------------
    
    
    if (!post) return "No post!"
    else{
        return(
            <>
                <div>
                    <h1> {post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={createPost}>Create Post</button>                    
                    <button onClick={()=>handleClick(click)}>Siguiente Post</button>
                    <button onClick={deletePost}>Eliminar Post</button>
                    <button onClick={()=>RegenerarPost(click)}>Regenerar Post</button>   
                    <button onClick={updatePost}>Actualizar Post</button>  
                </div>
            </>            
        )
    }
}