import React from 'react'
import { Card } from 'react-bootstrap'

export default function Service({ data }) {
    const { image, titulo, descripcion } = data;
    return (
        <div className="row">
            <Card style={{ width: '18rem' }} className="col-6 col-md-6 col-sm-4 my-3 mt-3">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
