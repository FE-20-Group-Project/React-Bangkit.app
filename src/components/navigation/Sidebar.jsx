import React from 'react'
import { Row } from 'react-bootstrap'
import { FaTable, FaChartLine } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Bangkit from '../../assets/image/bangkit2.png'

function Sidebar() {

    const {session} = useSelector( state => state.userSession );

  return (
    <nav className='col-2 bg-danger' style={{ minHeight: '100vh' }}>
        <Row>
            { session.type==='admin' ? (
                <>
            <Link to='/dashboard-admin' className='my-5 mx-auto text-center'>
                <img src={Bangkit} width='160px' />
            </Link>
                    <ul className='w-100' style={{ listStyle:'none' }}>
                        <li className='mb-3'>
                            <Link className='p-3 text-light'><FaChartLine/> Dashboard</Link>
                        </li>
                    </ul>
                    <ul className='w-100' style={{ listStyle:'none' }}>
                        <li  className='mb-3 w-100'>
                            <small className='text-light'>Menu</small>
                            <hr className='text-light'/>
                        </li>
                        <li  className='mb-4 w-100'>
                            <Link className='p-3 dashboard-nav-link text-light'><FaTable className='me-2'/> Data Pengunjung</Link>
                        </li>
                        <li  className='mb-4 w-100'>
                            <Link className='p-3 dashboard-nav-link text-light'><FaTable className='me-2'/> Data Instansi</Link>
                        </li>
                        <li  className='mb-4 w-100'>
                            <Link to='/dashboard-admin/article' className='p-3 dashboard-nav-link text-light'><FaTable className='me-2'/> Data Artikel</Link>
                        </li>
                    </ul>
                </>
            ): (
                <>
                <Link to='/dashboard-company' className='my-5 mx-auto text-center'>
                    <img src={Bangkit} width='160px' />
                </Link>
                    <ul className='w-100' style={{ listStyle:'none' }}>
                        <li className='mb-3'>
                        <li  className='mb-3 w-100'>
                            <small className='text-light'>Menu</small>
                            <hr className='text-light'/>
                        </li>
                            <Link to='/dashboard-company' className='p-3 text-light'> Dashboard</Link>
                        </li>
                    </ul>
                    <ul className='w-100' style={{ listStyle:'none' }}>
                        <li  className='mb-4 w-100'>
                            <Link to='/dashboard-company/scholarship' className='p-3 dashboard-nav-link text-light'><FaTable className='me-2'/> Data Beasiswa</Link>
                        </li>
                        <li  className='mb-4 w-100'>
                            <Link to='/dashboard-company/jobs' className='p-3 dashboard-nav-link text-light'><FaTable className='me-2'/> Data Loker</Link>
                        </li>
                    </ul>
                </>
            ) }
        </Row>
    </nav>
  )
}

export default Sidebar
