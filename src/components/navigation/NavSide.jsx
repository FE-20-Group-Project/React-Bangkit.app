import React from 'react'
import { FaChartLine, FaSignOutAlt, FaTable } from 'react-icons/fa'
import { Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearSession } from '../../redux/action/userSession'
import { getCookie } from '../../cookie/cookie'
import Bangkit from '../../assets/image/bangkit2.png'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

function NavSide() {
  const {session} = useSelector( state => state.userSession );
  const navigate = useNavigate();
  const dispatch = useDispatch();


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
    <nav className='nav-sidebar col-2 bg-danger p-3' style={{ minHeight: '100vh' }}>
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
    </nav>
  )
}

export default NavSide
