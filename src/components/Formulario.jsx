import React from 'react'
import './formulario.css'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Formulario() {
    return (
        <div className="d-flex flex-wrap fondo mt-3 my-4">
                <div className="text-dark text-center  col-lg-6 col-sm-12 text-center mt-5 m-auto">
                    <h1>Get In Touch</h1>
                    <div>
                    <h1><FontAwesomeIcon icon={faMapMarked} /> Location  </h1>
                    <p> Proudly serving Oakland and nearby areas.</p>
                    </div>
                    <div>
                    <h1><FontAwesomeIcon icon={faPhone} /> Phone</h1>
                    <p> 510-361-0509</p>
                    </div>
                    <div>
                    <h1> <FontAwesomeIcon icon={faEnvelope} /> Email</h1>
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
                    <div className="text-center">
                        <h1> Get An Estimate</h1>
                        <p> Need to Know much your cost?</p>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Control type="text"
                            placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email"
                            placeholder="E-mail*" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Phone*" />
                    </Form.Group>
                    <Form.Select aria-label="Default select example">
                        <option>Interested In</option>
                        <option value="1">Roof Repair</option>
                        <option value="2">Skylight Installation</option>
                        <option value="3">Solar Roof Ventilator</option>
                        <option value="4">Downspout Service</option>
                        <option value="5">Flat Roof Installation</option>
                        <option value="6">Shingles Roof</option>
                        <option value="7">Gutter Cleaning Service</option>
                        <option value="8">Chimmey Repair Service</option>
                    </Form.Select>
                    <Button className="mt-3" variant="danger" type="submit">
                        Click here to submit form
                    </Button>
                </Form>
                </div>
            </div>
    )
}
