import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { KEY_SESSION } from '../env/env'
import { logOut } from '../redux/action/userSession'
import { Nav, Navbar, NavDropdown, Container,  Form, Button } from 'react-bootstrap'
import Logo from '../assets/image/bangkit.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Navigation() {

 const navigate = useNavigate()
 const dispatch = useDispatch();
 const state = useSelector( state => state.userSession );

  const logout = () => {
    MySwal.fire({
      title: 'Yakin ingin keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, keluar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOut());
        localStorage.removeItem(KEY_SESSION);
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        navigate('/login');
        console.log(state);
      }
    })

}

  return (
    <Navbar collapseOnSelect expand="md" variant="light" className='bg-light border-bottom border-3 border-danger py-3'>
    <Container>
      <NavLink to='/'>
            <img src={Logo} width='100px' />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex w-100 justify-content-end">
                <NavLink className='nav-item text-dark p-2 me-3' to="/">Beranda</NavLink>
                <NavDropdown className='nav-links text-dark me-3' title='Informasi Bantuan' id="collasible-nav-dropdown">
                    <NavLink to='/jobs' className='dropdown-item'>Lowongan Pekerjaan</NavLink>
                    <NavLink to='/scholarship' className='dropdown-item'>Beasiswa Gratis</NavLink>
                </NavDropdown>
                <NavLink className='nav-item text-dark p-2 me-3' to="/article">Article</NavLink>
                <NavLink className='nav-item text-dark p-2 me-3' to="#pricing">Profile</NavLink>
                { state.isLogin==false ? (
                <NavLink to='/login' className='btn btn-outline-danger'>Login</NavLink>
                ): (
                <Nav.Link onClick={ () => logout() } className='btn btn-outline-danger'>Logout</Nav.Link>
                ) }
                
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navigation