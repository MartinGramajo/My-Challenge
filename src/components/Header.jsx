import React from 'react'
import './header.css'
import { Form, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="d-flex flex-wrap fondo-imagen">
            <div className="text-white col-lg-6 col-sm-12 text-center m-auto">
                <h1>Tu compañia perfecta</h1>
                <p> No solo para tus desayuno y meriendas, nuestros productos estan presentes en cada momento de tu vida.</p>
                <Button className="mt-3" variant="danger" type="submit">
                    Click here to submit form
                </Button>
            </div>
            <div style={{
                margin: 'auto',
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <Form className="bg-light p-5">
                    <Form.Group>
                        <Form.Label>Enter your full name:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter your full name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email address:</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your age:</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" />
                    </Form.Group>
                    <Button className="mt-3" variant="danger" type="submit">
                        Click here to submit form
                    </Button>
                </Form>
            </div>
        </div>
    )
}
