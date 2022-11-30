import React from 'react'
import { Row, Col, Table, Pagination, Card, Button } from 'react-bootstrap'
import { FaReplyAll, FaUserTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Profil from '../../assets/png/section.png'

function SectionReportList({subcategory, laporan}) {
    console.log(laporan);
    console.log(subcategory);
   
  return (
    <>
        <section className='report-list container-fluid bg-soft-light p-5'>
            <Row className='p-0 m-0 d-flex justify-content-between'>
                <aside className='col-9'>
                    <Row className='mb-3'>

                    </Row>
                <Row>
                    { laporan.map( item => {
                        if(item.laporan.subcategory === subcategory){
                            return (
                                <article className='col-12'>
                                    <Row className='d-flex justify-content-between border p-3'>
                                        <Col xs='1'>
                                            <img src={`https://api-bangkit.up.railway.app/${item.laporan.user.image}`} width='30px' />
                                        </Col>
                                        <Col xs='5'>
                                            <Link to={'/report/detail-report/' + item.laporan._id}>{item.laporan.title}</Link>
                                        </Col>
                                        <Col xs='2'>
                                            <span>
                                            <FaReplyAll className='fs-5 me-2'/>
                                            100
                                            </span>
                                        </Col>
                                        <Col xs='2'>
                                            <span>
                                            <FaUserTag className='fs-5 me-2' />
                                            30
                                            </span>
                                        </Col>
                                        <Col xs='2'>
                                            <small>{item.laporan.date}</small>
                                        </Col>
                                    </Row>
                                </article>
                            )
                        }
                    } ) }
                </Row>
                </aside>
                <aside className='col-3'>
                    <Card className='bg-soft-light mx-auto p-3 mb-3 position-sticky' style={{ top:'40px' }}>
                        <Card.Title className='fw-bold text-dark border-bottom border-danger pb-3'>Laporan Terakhir</Card.Title>
                        <Row>
                            <article className='latest-post-report mb-3'>
                                <Row className='d-flex justify-content-between'>
                                    <Col xs='2'>
                                        <img className='img-fluid' src={Profil} />
                                    </Col>
                                    <Col xs='10'>
                                        <p className='latest-date'>Tessssss</p>
                                    </Col>
                                </Row>
                            </article>
                            <article className='latest-post-report  mb-3'>
                                <Row className='d-flex justify-content-between'>
                                    <Col xs='2'>
                                        <img className='img-fluid' src={Profil} />
                                    </Col>
                                    <Col xs='10'>
                                        <p className='latest-date'>Tessssss</p>
                                    </Col>
                                </Row>
                            </article>
                            <article className='latest-post-report  mb-3'>
                                <Row className='d-flex justify-content-between'>
                                    <Col xs='2'>
                                        <img className='img-fluid' src={Profil} />
                                    </Col>
                                    <Col xs='10'>
                                        <p className='latest-date'>Tessssss</p>
                                    </Col>
                                </Row>
                            </article>
                        </Row>
                    </Card>
                </aside>
            </Row>
        </section>
    </>
  )
}

export default SectionReportList
