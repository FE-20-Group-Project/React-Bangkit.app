import React from 'react'
import { Row, Dropdown, Button, Col } from 'react-bootstrap'
import { FaUser, FaBars, FaSignOutAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { KEY_SESSION } from '../../env/env'
import { getCookie } from '../../cookie/cookie'
import { clearSession } from '../../redux/action/userSession'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }

function DashboardTopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            document.cookie = "token=; expires=passedDate";
            localStorage.removeItem(KEY_SESSION);
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
    <header className='topbar container-fluid border-bottom border-danger w-100 p-3'>
            <Row className='d-flex justify-content-between'>
                <Col xs='3' className='d-flex'>
                    <Button className='bg-light text-dark border-0'><FaBars className='fs-4'/></Button>
                    <h3 className='fw-bold'>Dashboard</h3>
                </Col>
                <Col xs='1'>
                <Dropdown drop="center">
                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='bg-light border-0'>
                    <img src={`https://api-bangkit.up.railway.app/${session.image}`} width='30' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="light" >
                        <NavLink to='/' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item py-2'><FaUser/> Homepage</NavLink>
                        <NavLink to='/user/profile' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item pb-2'><FaUser/> Profile</NavLink>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4" onClick={ () => logout() }><FaSignOutAlt/> Logout</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
    </header>
  )
}

export default DashboardTopBar;
