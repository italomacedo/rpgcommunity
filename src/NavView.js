import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import RPGCommunityFacade from './business/RPGCommunityFacade';

function NavView(props) {
    const logout = (response) => {
        RPGCommunityFacade.logout();
    };

    const perfil = () => {
        RPGCommunityFacade.viewProfile();
    }

    return (
        <div className="RPGCommunity">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img src="./resources/applogo.png" width="35" height="40" alt="" /> RPGCommunity</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Form inline>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={perfil}>Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
} export default NavView;
