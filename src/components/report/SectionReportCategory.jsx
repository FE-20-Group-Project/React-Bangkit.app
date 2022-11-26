import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Report from '../../assets/png/pandemic3.jpg'
import Profil from '../../assets/png/section.png'

function SectionReportCategory() {
  return (
    <>
        <section className='report-section container-fluid bg-soft-light py-5 px-3'>
            <Row className='d-flex justify-content-around f-wrap'>
                <Col xs='6'>
                    <h1 className='text-header-2'>Brief Explanation tentang Pelaporan Masalah</h1>
                </Col>
                <Col xs='5'>
                    <img className='img-fluid' src={Report} />
                </Col>
            </Row>
        </section>
        <section className='report-list container-fluid p-5 bg-soft-light'>
            <Row className='d-flex justify-content-between'>
                <aside className='col-8 border'>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3'>Ekonomi</h3>
                        <Link to='/report/1'>
                            <Card className='mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/2'>
                            <Card className='mb-3  rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3'>Kesehatan</h3>
                        <Link to='/report/3'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/4'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>    
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3'>Pendidikan</h3>
                        <Link to='/report/5'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 text-danger d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/6'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sub-Category</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                </aside>
                <aside className='col-4'>
                    <Row className='p-0 m-0 position-sticky' style={{ top:'40px' }}>
                        <Card className='bg-danger mx-auto text-center py-5 px-3 mb-3 position-sticky'>
                            <Card.Title className='fw-bold text-light'>Selamat datang di Bangkit</Card.Title>
                            <Card.Body className='fw-light text-light'>Join today and start discussing what you like.</Card.Body>
                            <Link to='/register' className='btn btn-light w-50 mx-auto text-danger'>Daftar</Link>
                        </Card>
                        <Card className='bg-soft-light mx-auto p-3'>
                            <Card.Title className='fw-bold text-dark border-bottom pb-3'>Penting!</Card.Title>
                            <Card.Body className='fw-light text-dark'>Join today and start discussing what you like.</Card.Body>
                        </Card>
                    </Row>
                </aside>
            </Row>
        </section>
    </>
  )
}

export default SectionReportCategory
