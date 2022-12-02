import React, {useEffect, useState} from 'react'
import { Row, Col, Table, Pagination, Card, Button } from 'react-bootstrap'
import { FaRocketchat, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profil from '../../assets/png/section.png'

function SectionReportList({subcategory, laporan}) {
    const {session} = useSelector( state => state.userSession );
    const [trending, setTrending] = useState([]);
    useEffect( () => {
        setTrending(laporan.sort((a, b) => (a.total_view < b.total_view ? 1 : -1)));
    }, [] )

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
                                <article className='col-12 border-0 border-bottom border-top shadow-md'>
                                    <Row className='d-flex justify-content-between p-3'>
                                        <Col xs='1' className='d-flex justify-content-center flex-column'>
                                            <img src={`https://api-bangkit.up.railway.app/${item.laporan.user.image}`} width='30px' />
                                        </Col>
                                        <Col xs='3' className='d-flex justify-content-center flex-column'>
                                            <Link className='text-danger' to={'/report/detail-report/' + item.laporan._id}>{item.laporan.title}</Link>
                                        </Col>
                                        <Col xs='2' className='d-flex justify-content-center flex-column'>
                                            <span>
                                            <FaRocketchat className='fs-5 me-2 text-danger'/>
                                            {item.reply.length}
                                            </span>
                                        </Col>
                                        <Col xs='2' className='d-flex justify-content-center flex-column'>
                                            <span>
                                            <FaEye className='fs-5 me-2 text-danger' />
                                            {item.laporan.total_view}
                                            </span>
                                        </Col>
                                        <Col xs='2'>
                                            <small>{item.laporan.date}</small>
                                        </Col>
                                    </Row>
                                </article>
                            )
                        }else {
                            return (
                                <article className='col-12 border-0 text-center border-bottom border-top shadow-md'>
                                        <h3 className='text-gray'>Tidak ada data Laporan!</h3>
                                </article>
                            )
                        }
                    } ) }
                    { !laporan && (
                                <article className='col-12 border-0 text-center border-bottom border-top shadow-md'>
                                        <h3 className='text-gray'>Tidak ada data Laporan!</h3>
                                </article>
                    ) }
                </Row>
                </aside>
                <aside className='col-3'>
                <Card className='bg-soft-light mx-auto p-3'>
                            <Card.Title className='border-bottom py-3'>Trending Post</Card.Title>
                                { trending.map( item => (
                                    <Card.Body key={item.laporan._id} className='bg-soft-light'>
                                        <Row className='d-flex justify-content-around'>
                                            <Col xs='3'>
                                                <img src={`https://api-bangkit.up.railway.app/${item.laporan.user.image}`} className='img-fluid' />
                                            </Col>
                                            <Col xs='9'>
                                                <Link to={'/report/detail-report/' + item.laporan._id} className='text-danger text-decoration-underline fw-500'>{item.laporan.title}</Link>
                                                <small className='text-danger fw-500 d-block mt-2'>{item.laporan.date}</small>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                ) ) }
                        </Card>
                </aside>
            </Row>
        </section>
    </>
  )
}

export default SectionReportList