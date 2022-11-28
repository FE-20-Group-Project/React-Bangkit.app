import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import Bangkit from '../../assets/image/bangkit2.png'

function Sidebar() {
  return (
    <nav className='col-2 bg-danger text-light' style={{ height: '100vh' }}>
        <Row className='d-flex justify-content-center flex-column'>
            <img src={Bangkit} style={{ width: '180px' }} className='mt-3 py-3 mx-auto' />
            <Col>
            <hr/>
            <small className='text-light'>Menu</small>
            <ul className='w-100 px-3' style={{ listStyle: 'none' }}>
                <li className='py-3 fw-light'><FaUser/> Data User</li>
                <li className='py-3 fw-light'><FaUser/> Data Company</li>
                <li className='py-3 fw-light'><FaUser/> Data Article</li>
            </ul>
            </Col>
        </Row>
    </nav>
  )
}

export default Sidebar
