import React from 'react'
import './gallery.css'
import {  Image } from 'react-bootstrap'

export default function Gallery({ data }) {
    const { img } = data;
    return (
        <div className=" row my-3" >
            <div >
                <Image className="gallery-image col-12" style={{ width: '250px'}}  src={img} rounded />
            </div>
        </div>
    )
}
