import React, { useContext } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.ico'

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" >
                <Navbar.Brand as={Link} to="/" >
                <img style={{width:'40px', borderRadius:'40px'}} src={logo} alt=""/>
                    &nbsp;<span style={{color:'red', fontWeight:'800'}}>Town Travel Transport</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="ml-auto" variant="pills" defaultActiveKey="/login">
                        <Nav.Item href="/">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/destination/CAR">
                                Destination
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/user/profile">
                                User Profile
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            {loggedInUser.email ?
                                <Nav.Link as={Link} to="/login" style={{color:'red'}}>
                                {loggedInUser.displayName}  </Nav.Link> :
                                <Nav.Link as={Link} to="/login" eventKey="/login">
                                    Log In
                                </Nav.Link>}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;