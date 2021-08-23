import React from 'react'
import {  Image } from 'react-bootstrap'

export default function Gallery({ data }) {
    const { img } = data;
    return (
        <div className=" my-3" >
            <div >
                <Image className="col-6"  style={{ width: '250px'}}  src={img} rounded />
            </div>
        </div>
    )
}
