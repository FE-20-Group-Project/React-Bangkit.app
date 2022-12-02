import React from 'react'
import DetailScolarship from '../../page/information/scholarship/DetailScolarship'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaInfoCircle, FaPhoneSquare, FaRegAddressBook } from 'react-icons/fa';

function SectionDetailScholarship({beasiswa, detailBeasiswa}) {
    const {session} = useSelector( state => state.userSession );
  return (
    <section className='container my-5' >
              <Row className='flex-column-reverse flex-xl-row'>
            <Col xs='12' xl='5' className='card p-0 my-3' style={{ overflow: 'scroll', height: '100vh' }}>
                    <Card.Header className='bg-danger text-center text-light fw-semibold' >
                    Lowongan berdasarkan Profil Anda
                    </Card.Header>
            { beasiswa.map( item => (
                <Card key={item._id} className='border rounded-0 p-3'>
                            <Row className='d-flex justify-content-around'>
                                <Col xs='3' >
                                    <img className='img-fluid' src={'https://api-bangkit.up.railway.app/' + item.image} />
                                </Col>
                                <Col xs='6' >
                                    <Card.Title className='fw-semibold'>{item.name}</Card.Title>
                                    <Card.Body>Kuota : {item.kuota}</Card.Body>
                                    <Card.Body>{item.instansiName}</Card.Body>
                                </Col>
                                <Col xs='3' className='d-flex justify-content-center flex-column' >
                                    <Link to={'/scholarship/' + item._id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                    <a href={item.link} target='_blank' className='btn btn-success text-light w-100 rounded-0 mb-3'><FaRegAddressBook className='ms-2'/> Daftar</a>
                                </Col>
                            </Row>
                        </Card>
            ) ) }
            </Col>
            <Col xs='12' xl='7' className='card p-5'>
                <img width='200' src={'https://api-bangkit.up.railway.app/' + detailBeasiswa.image} />
                <h2 className='mb-3'>{detailBeasiswa.name}</h2>
                <p className='mb-3'>{detailBeasiswa.instansiName}</p>
                <p className='mb-3'>Kuota : {detailBeasiswa.kuota}</p>
                <p className='mb-3'>{detailBeasiswa.email}</p>
                <Form.Group>
                    <a href={detailBeasiswa.link} target='_blank' className='btn btn-warning me-3 rounded-pill'>Daftar</a>
                    <Link to='/scholarship' className='btn btn-danger rounded-pill'>Kembali</Link>
                </Form.Group>
                <Row>
                    <p className='py-5'>{detailBeasiswa.desc}</p>
                </Row>
            </Col>
        </Row>
    </section>
  )
}

export default SectionDetailScholarship