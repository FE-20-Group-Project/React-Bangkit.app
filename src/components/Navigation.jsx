import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container,  Form, Button } from 'react-bootstrap'
import Logo from '../assets/image/bangkit.png'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" variant="light" className='bg-light border-bottom border-3 border-danger py-3'>
    <Container>
      <NavLink to='/'>
            <img src={Logo} width='100px' />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex w-100 justify-content-end">
                <NavLink className='nav-links text-dark p-2 me-3' to="#home">Beranda</NavLink>
                <NavDropdown className='nav-links text-dark me-3' title='Informasi Bantuan' id="collasible-nav-dropdown">
                    <NavDropdown.Item>Lowongan Pekerjaan</NavDropdown.Item>
                    <NavDropdown.Item>Beasiswa Gratis</NavDropdown.Item>
                </NavDropdown>
                <NavLink className='nav-links text-dark p-2 me-3' to="#pricing">Article</NavLink>
                <NavLink className='nav-links text-dark p-2 me-3' to="#pricing">Profile</NavLink>
                <NavLink to='/login' className='btn btn-outline-danger'>Login</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navigation