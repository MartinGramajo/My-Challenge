import React from 'react';
import Comment from './Comment';

export default function Comments() {
    const perfiles = [
        {
            image: "/pp.jpg",
            nombre: "Mago",
            comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
        },
        {
            image: "/pp.jpg",
            nombre: "Mago",
            comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
        },
        {
            image: "/pp.jpg",
            nombre: "Mago",
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
