import React from 'react'
import { Image } from 'react-bootstrap'

export default function Service({ data }) {
    const { image, titulo,  } = data;
    return (
        <div className="row mb-3">
                <div  >
                <Image style={{ width: '18rem', MaxWidth: '200px'}} variant="top" src={image} />
                <div className="bg-white">
                    <p className="m-auto text-center">{titulo}</p>
                </div>
                </div>
        </div>
    )
}
