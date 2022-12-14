import React, {useState} from 'react'
import { Row, Dropdown, Button, Col, Offcanvas } from 'react-bootstrap'
import { FaUser, FaBars, FaSignOutAlt, FaTable, FaChartLine } from 'react-icons/fa'
import Bangkit from '../../assets/image/bangkit2.png'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCookie } from '../../cookie/cookie'
import cookieCutter from 'cookie-cutter'
import { clearSession } from '../../redux/action/userSession'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }

function DashboardTopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  

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
              const token = getCookie('token')
              dispatch(clearSession(token));
              cookieCutter.set("token","",{ expires: new Date(0) });
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
    <>
      <header className='topbar container-fluid bg-dark text-light w-100 p-3'>
              <Row className='d-flex justify-content-between'>
                  <Col xs='3' className='d-flex'>
                  <Button variant="dark" onClick={handleShow} className="me-2 text-light"><FaBars/></Button>
                  <Offcanvas show={show} onHide={handleClose} className='bg-danger' >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <div className='logo my-3 text-center'>
                        <img src={Bangkit} width='150' />
                    </div>
                    <ul className='list-group text-light mt-5' style={{ listStyle:'none' }}>
                        <li>
                            <small>Menu</small>
                        </li>
                        { session.type === 'admin' && (
                          <>
                            <Link to='/dashboard-admin' className='nav-links text-light fw-600 my-3'><FaChartLine className='mx-2'/> Dashboard</Link>
                            <Link to='/dashboard-admin/data-user' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data User</Link>
                            <Link to='/dashboard-admin/data-company' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data Instansi</Link>
                            <Link to='/dashboard-admin/report' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data Laporan</Link>
                            <Link to='/dashboard-admin/article' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data Artikel</Link>
                          </>
                        ) }
                        { session.type === 'instansi' && (
                          <>
                            <Link to='/dashboard-company' className='nav-links text-light fw-600 my-3'><FaChartLine className='mx-2'/> Dashboard</Link>
                            <Link to='/dashboard-company/jobs' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data Loker</Link>
                            <Link to='/dashboard-company/scholarship' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/> Data Beasiswa</Link>
                            <Link to='/dashboard-company/report' className='nav-links text-light fw-600 my-3'><FaTable className='mx-2'/>Data Laporan</Link>
                          </>
                        ) }
                        <hr/>
                        <li className='nav-links text-light fw-600 my-2' onClick={ () => logout() } style={{ cursor:'pointer' }}><FaSignOutAlt className='mx-2'/> Logout</li>
                    </ul>
                    </Offcanvas.Body>
                  </Offcanvas>
                      <h3 className='fw-bold'>Dashboard</h3>
                  </Col>
                  <Col md='1' sm='2' xs='3'>
                  <Dropdown drop="center">
                      <Dropdown.Toggle id="dropdown-button-dark-example1" className='bg-dark border-0'>
                      <img src={`https://api-bangkit.up.railway.app/${session.image}`} width='30' height='30' className='rounded-circle' />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='bg-soft-light' >
                          <NavLink to='/' style={({isActive}) => (isActive ? linkStyle : undefined)} className='dropdown-item py-2'><FaUser/> Homepage</NavLink>
                          <Dropdown.Item className='text-danger' onClick={ () => logout() }><FaSignOutAlt/> Logout</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                  </Col>
              </Row>
    
      </header>
    </>
  )
}

export default DashboardTopBar;
