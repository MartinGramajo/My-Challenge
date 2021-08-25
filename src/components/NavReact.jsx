import './navreact.css';
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export default function NavReact() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="color-fondo" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '200px'}} src="https://jrroofers.com/static/media/logo.cc97ffc4.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#article">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#process">Our Process</Nav.Link>
                            <Nav.Link href="#reviews">Reviews</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className="ov-btn-slide-right" variant="danger"> <FontAwesomeIcon icon={faPhone} /> 510-361-0509  </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
