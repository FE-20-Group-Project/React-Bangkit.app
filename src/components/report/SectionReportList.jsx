import React from 'react'
import { Row, Col, Table, Pagination, Card, Button } from 'react-bootstrap'
import Profil from '../../assets/png/section.png'

function SectionReportList() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
}
  return (
    <>
        <section className='report-list container-fluid bg-soft-light p-5'>
            <Row className='p-0 m-0 d-flex justify-content-between'>
                <aside className='col-9'>
                    <Row className='mb-3'>
                        <Pagination size="sm">{items}</Pagination>
                    </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Topic</th>
                                <th className='text-center'>Total Reply & Total View / User</th>
                                <th className='text-center'>Latest Reply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border border-danger'>
                                <td>
                                    <img src={Profil} width='60'/>
                                </td>
                                <td >
                                    <h5 className='p-3'>Judul Laporan</h5>
                                </td>
                                <td className='text-center'>
                                    <div className='p-3'>
                                        <Button variant='danger' className='btn-sm rounded-0 mx-2'>Total Reply</Button>
                                        <Button variant='danger' className='btn-sm rounded-0'>Total View / User</Button>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <p className='p-3'>Tanggal, hari, nama</p>
                                </td>
                            </tr>
                            <tr className='border border-danger'>
                                <td>
                                    <img src={Profil} width='60'/>
                                </td>
                                <td >
                                    <h5 className='p-3'>Judul Laporan</h5>
                                </td>
                                <td className='text-center'>
                                    <div className='p-3'>
                                        <Button variant='danger' className='btn-sm rounded-0 mx-2'>Total Reply</Button>
                                        <Button variant='danger' className='btn-sm rounded-0'>Total View / User</Button>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <p className='p-3'>Tanggal, hari, nama</p>
                                </td>
                            </tr>
                            <tr className='border border-danger'>
                                <td>
                                    <img src={Profil} width='60'/>
                                </td>
                                <td >
                                    <h5 className='p-3'>Judul Laporan</h5>
                                </td>
                                <td className='text-center'>
                                    <div className='p-3'>
                                        <Button variant='danger' className='btn-sm rounded-0 mx-2'>Total Reply</Button>
                                        <Button variant='danger' className='btn-sm rounded-0'>Total View / User</Button>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <p className='p-3'>Tanggal, hari, nama</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row className='mb-3'>
                    <Pagination size="sm">{items}</Pagination>
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
