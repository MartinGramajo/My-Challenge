import React from 'react';
import Comment from './Comment';

export default function Comments() {
    const perfiles = [
        {
            image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            nombre: "Ryan S.",
            comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
        },
        {
            image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            nombre: "Emma S.",
            comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
        },
        {
            image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            nombre: "Emma S.",
            comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
        },
    ]
    return (
        <>
            
            <div className=" container d-flex  flex-wrap justify-content-between">
                {perfiles.map((perfil, i) =>
                    <Comment key={i} data={perfil} />
                )}
            </div>

        </>
    );
}
