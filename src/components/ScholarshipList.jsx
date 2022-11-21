import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import { FaInfoCircle, FaRegAddressBook } from 'react-icons/fa';

function ScholarshipList({scholarship}) {
    
  return (
    <>
        { scholarship.map( item => (
            <Card key={item.id} className='border-0 border-top border-5 border-danger rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='3' className='p-3' >
                                <img className='img-fluid' src={item.logo} />
                            </Col>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>{item.nama}</Card.Title>
                                <Card.Body>{item.jenisPekerjaan}</Card.Body>
                                <Card.Body>{item.createdAt}</Card.Body>
                            </Col>
                            <Col xs='10' sm='3' className='d-flex justify-content-center flex-column' >
                                <Link to={'/scholarship/' + item.id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                <a href='https://forms.gle/3xNCiHQd5jMtRGTa7' target='_blank' className='btn btn-success w-100 rounded-0 mb-3'><FaRegAddressBook className='ms-2'/> Daftar</a>
                            </Col>
                        </Row>
                    </Card>
        ) ) }
    </>
  )
}

export default ScholarshipList
