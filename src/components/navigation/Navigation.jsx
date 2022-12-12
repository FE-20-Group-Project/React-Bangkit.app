import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCookie } from '../../cookie/cookie'
import { clearSession, getSession, } from '../../redux/action/userSession'
import { Nav, Navbar, NavDropdown, Container,  Form, Button, Dropdown } from 'react-bootstrap'
import Logo from '../../assets/image/bangkit.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaSignInAlt, FaPenAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const MySwal = withReactContent(Swal)

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }
function Navigation() {

 const navigate = useNavigate()
 const dispatch = useDispatch();
 const {session} = useSelector( state => state.userSession );


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
        dispatch(clearSession(getCookie('token')));
        // document.cookie = "token=; expires=passedDate";
        document.cookie = "token=; Max-Age=0";
        MySwal.fire({
          icon: 'success',
          title: 'Berhasil Logout!'
        }
        )
        navigate('/login');
      }
    })

}


  return (
    <Navbar collapseOnSelect expand="md" variant="light" className='bg-light border-bottom border-5 shadow-lg border-danger py-3 position-sticky top-0' style={{ zIndex: '9' }}>
    <Container fluid className='nav-container px-5'>
      <NavLink to='/'>
            <img src={Logo} width='100px' />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-responsive' />
        <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="d-flex w-100 justify-content-end">
                <NavLink to="/" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item p-2 me-3' >Beranda</NavLink>
                <NavLink to="/about-us" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item p-2 me-3' >About</NavLink>
                <NavLink to="/report" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item p-2 me-3' >Pelaporan</NavLink>
                  <NavDropdown className='nav-links text-dark me-3' title='Informasi' id="collasible-nav-dropdown">
                      <NavLink to='/jobs' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item'>Lowongan Pekerjaan</NavLink>
                      <NavLink to='/scholarship' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item'>Beasiswa</NavLink>
                      <NavLink to="/article" style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item' >Portal Berita</NavLink>
                  </NavDropdown>
                { session==false ? (
                  <>
                    <NavLink to='/login' className='btn btn-sm btn-outline-danger mx-2 pt-1 px-2 m-1'><FaSignInAlt className='me-2'/>Login</NavLink>
                    <NavLink to='/register' className='btn btn-sm btn-danger pt-1 px-2 m-1'><FaPenAlt className='me-2'/>Register</NavLink>
                  </>
                ): (
                      <Dropdown drop="start">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className='bg-light border-0'>
                        <img src={`https://api-bangkit.up.railway.app/${session.image}`} width='30' height='30' className='rounded-circle' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="light" >
                          { session.type==='instansi' && (
                              <NavLink to='/dashboard-company' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item py-2'><FaUser/> Dashboard Instansi</NavLink>
                          ) }
                          { session.type==='admin' && (
                              <NavLink to='/dashboard-admin' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item py-2'><FaUser/> Dashboard Admin</NavLink>
                          ) }
                          <NavLink to='/user/profile' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item'><FaUser/> Profile</NavLink>
                          <Dropdown.Divider />
                          <Dropdown.Item className='text-danger' onClick={ () => logout() }><FaSignOutAlt/> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                ) }
                
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navigation