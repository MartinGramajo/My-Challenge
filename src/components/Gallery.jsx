import React from 'react'
import {  Image } from 'react-bootstrap'

export default function Gallery({ data }) {
    const { image } = data;
    return (
        <div className="col-12 col-md-4 col-sm-4 my-3" >
            <div className="d-flex justify-content-between">
                <Image  src={image} rounded style={{width: '280px', height: '280px'}} />
            </div>
        </div>
    )
}
