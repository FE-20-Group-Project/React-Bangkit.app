import React from 'react'
import { BASE_URL } from '../../env/env';
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import { FaInfoCircle, FaRegAddressBook } from 'react-icons/fa';

function ScholarshipList({session, scholarship}) {
  return (
    <>
        { scholarship.map( item => (
            <Card key={item.id} className='border-0 border-top border-5 border-danger rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='3' className='p-3' >
                                <img className='img-fluid' src={`${BASE_URL}/${item.image}`} />
                            </Col>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>{item.name}</Card.Title>
                                <Card.Body>Kuota : {item.kuota}</Card.Body>
                                <Card.Body>{item.instansiName}</Card.Body>
                            </Col>
                            <Col xs='10' sm='3' className='d-flex justify-content-center flex-column' >
                                <Link to={'/scholarship/' + item._id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                { session && (
                                <a href='https://forms.gle/beasiswa4update1' target='_blank' className='btn btn-success w-100 rounded-0 mb-3'><FaRegAddressBook className='ms-2'/> Daftar</a>
                                ) }
                            </Col>
                        </Row>
                    </Card>
        ) ) }
    </>
  )
}

export default ScholarshipList
