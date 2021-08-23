import React from 'react'
import './formulario.css'
import { Form, Button } from 'react-bootstrap'


export default function Formulario() {
    return (
        <div className="d-flex flex-wrap bg-light fondo mt-3 my-4">
                <div className="text-dark col-lg-6 col-sm-12 text-center  mt-5 m-auto">
                    <h1>Get In Touch</h1>
                    <div>
                    <h1>Location</h1>
                    <p> Proudly serving Oakland and nearby areas.</p>
                    </div>
                    <div>
                    <h1>Phone</h1>
                    <p> 510-361-0509</p>
                    </div>
                    <div>
                    <h1>Email</h1>
                    <p> contacto@contacto.com</p>
                    </div>
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
