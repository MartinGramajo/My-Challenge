import React from 'react'
import './header.css'
import { Form, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="d-flex flex-wrap fondo-imagen">
            <div className="text-white col-lg-6 col-sm-12 text-center my-auto">
                <h1>Let Us Solve Your</h1>
                <h2> Roofing Problems</h2>
                <p> The best customer in the business, no joke!</p>
                <p> Check it out by yourself right now.</p>
                <Button className="mt-3" variant="danger" type="submit">
                    Call Us Now!
                </Button>
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
