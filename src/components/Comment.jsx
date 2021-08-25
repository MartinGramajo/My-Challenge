import React from 'react'
import { Toast, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Comment({ data }) {
    const { image, nombre, comentario } = data;
    return (
        <div className="my-5 mx-1">
            <div className="container">
                <Toast className="col-6">
                    <Toast.Header>
                        <Image src={image} style={{ width: '80px' }} roundedCircle />
                        <strong className="me-auto m-auto"> {nombre}</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <p>Service: <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} /></p>
                        {comentario}
                    </Toast.Body>
                </Toast>
            </div>
        </div>
    )
}
