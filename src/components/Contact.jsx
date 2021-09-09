import './banner.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className="color-fondo text-white p-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-6 m-auto">
                        <h1>Get Your Rooftop Repaired Today!</h1>
                        <p>We’d love to earn your business and add you to our list of very satisfied customers!</p>
                    </div>
                    <div className="d-flex justify-content-evenly col-md-6 m-auto p-5">
                        <Button className="p-4" variant="danger"> <FontAwesomeIcon icon={faPhone} /> 510-361-0509</Button> 
                    </div>
                </div>
            </div>
        </div>
    )
}