import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../App';
import './header.css'

const Header = () => {
    const [loggedInUser] = useContext(userContext);

    return (
        <div>
        <Container fluid={true} className="shadow-sm">
            <Container>
                <Navbar expand="lg">
                    <Link to="/"><Navbar.Brand href="#home">Ride<span className="text-dark"> Sharing</span></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ml-auto p-1">
                        <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/transport/bike"><Nav.Link href="#destination">Destination</Nav.Link></Link>
                        <Link to="#"><Nav.Link href="#">Blog</Nav.Link></Link>
                        <Link to="#"><Nav.Link href="#">Contact</Nav.Link></Link>
                        <Link to="/login"><Nav.Link href="#login"> {loggedInUser.name? loggedInUser.name : "Login"}</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    </div>
    );
};

export default Header;