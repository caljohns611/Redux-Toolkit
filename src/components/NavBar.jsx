import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>Fitness Tracker</Navbar.Brand>
        <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/exercise'>Exercise</Nav.Link>
        </Nav>
    </Navbar>
);

export default NavBar;