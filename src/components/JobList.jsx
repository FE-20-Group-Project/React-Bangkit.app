import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'
import { FaInfoCircle, FaPhoneSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function JobList({data}) {

  return (
    <>
        { data.map( item => {
            if(item.type === 'Job Seeker') {
                return (
                    <Card key={item.id} className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='3' className='p-3' >
                                <img className='img-fluid' src={item.logo} />
                            </Col>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>{item.nama}</Card.Title>
                                <Card.Body>{item.jenisPekerjaan}</Card.Body>
                                <Card.Body>{item.lokasi}</Card.Body>
                            </Col>
                            <Col xs='10' sm='3'className='d-flex justify-content-center flex-column' >
                                <Link to={'/jobs/' + item.id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                <Button variant='success' className='w-100 rounded-0 mb-3'><FaPhoneSquare className='ms-2'/> Contact</Button>
                            </Col>
                        </Row>
                    </Card>
                )
            }
        } ) }
    </>
  )
}

export default JobList;
