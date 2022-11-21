import React from 'react'
import DetailScolarship from '../page/information/scholarship/DetailScolarship'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation'
import { FaInfoCircle, FaPhoneSquare, FaRegAddressBook } from 'react-icons/fa';

function SectionDetailScholarship({beasiswa, detailBeasiswa}) {
    const {isLogin} = useSelector( state => state.userSession );
  return (
    <section className='container my-5' >
              <Row className='flex-column-reverse flex-xl-row'>
            <Col xs='12' xl='5' className='card p-0 my-3' style={{ overflow: 'scroll', height: '100vh' }}>
                    <Card.Header className='bg-danger text-center text-light fw-semibold' >
                    Lowongan berdasarkan Profil Anda
                    </Card.Header>
            { beasiswa.map( item => (
                <Card key={item.id} className='border rounded-0 p-3'>
                            <Row className='d-flex justify-content-around'>
                                <Col xs='3' >
                                    <img className='img-fluid' src={item.logo} />
                                </Col>
                                <Col xs='6' >
                                    <Card.Title className='fw-semibold'>{item.nama}</Card.Title>
                                    <Card.Body>{item.jenisPekerjaan}</Card.Body>
                                    <Card.Body>{item.lokasi}</Card.Body>
                                </Col>
                                <Col xs='3' className='d-flex justify-content-center flex-column' >
                                    <Link to={'/scholarship/' + item.id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                    <a href='https://forms.gle/3xNCiHQd5jMtRGTa7' target='_blank' className='btn btn-success text-light w-100 rounded-0 mb-3'><FaRegAddressBook className='ms-2'/> Daftar</a>
                                </Col>
                            </Row>
                        </Card>
            ) ) }
            </Col>
            <Col xs='12' xl='7' className='card p-5'>
                <h2 className='mb-3'>{detailBeasiswa.nama}</h2>
                <p className='mb-3'>{detailBeasiswa.lokasi}</p>
                <p className='mb-3'>{detailBeasiswa.gaji}</p>
                <p className='mb-3'>{detailBeasiswa.jenisPekerjaan}</p>
                <Form.Group>
                    <a href='https://forms.gle/3xNCiHQd5jMtRGTa7' target='_blank' className='btn btn-warning me-3 rounded-pill'>Daftar</a>
                    <Link to='/scholarship' className='btn btn-danger rounded-pill'>Kembali</Link>
                </Form.Group>
                <Row>
                    <p className='py-5'>{detailBeasiswa.deskripsi}</p>
                </Row>
            </Col>
        </Row>
    </section>
  )
}

export default SectionDetailScholarship
