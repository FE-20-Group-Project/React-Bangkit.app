import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import Reply from './Reply';
import CarouselBS from '../../components/carousel/CarouselBS'
import { Link, useNavigate } from 'react-router-dom';
import io from 'socket.io-client'
import axios from 'axios';
import { getCookie } from '../../cookie/cookie';
import { API_KEY_REPLY, API_KEY_REPORT } from '../../env/env';
import { FaTrash, FaClock, FaUserAlt, FaEdit, FaClipboard, FaClipboardList, FaCheck, FaCheckCircle, FaTimes } from 'react-icons/fa';
import ms from 'parse-ms'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux';

const socket = io.connect("https://api-bangkit.up.railway.app");
const MySwal = withReactContent(Swal)

function SectionDetailReport({id, detailLaporan, setIsLoading}) {
    const navigate = useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [ data, setData ] = useState([]);
    const [timer, setTimer] = useState();
    const [ trending, setTrending ] = useState([]);
    useEffect( () => {
        socket.on("laporan", (event) => {
            if(event.id_laporan) {
                setData(event.data);
            }
        })
    }, [socket, session] )

    useEffect( () => {
        const exp = detailLaporan.laporan.expired;
        setTimer(ms(exp - Date.now()));
    }, [setIsLoading])
    
    const handleSolveReport = (id) => {
        Swal.fire({
            title: 'Anda yakin ingin menutup laporan berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
        }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                const form = new FormData();
                form.append('status', 'solved');
                axios({
                    url: `${API_KEY_REPORT}/${id}`,
                    method: "PUT",
                    headers: {  
                        authorization: `Bearer ${token}`
                    },
                    data: form
                }).then( data => {
                    if(data.data) {
                        setIsLoading(true);
                        Swal.fire(
                        'Selesai!',
                        'Laporan berhasil ditutup.',
                        'success'
                        )
                    }
                } ).catch( error => {
                    MySwal.fire({
                        icon: 'warning',
                        title: error.response.data.message,
                    })
                } )
            }
        })
    }

    const handleDeleteLaporan = (id) => {
        Swal.fire({
            title: 'Anda yakin ingin menghapus laporan berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
        }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${API_KEY_REPORT}/${id}`,
                    method: "DELETE",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    if(data.data) {
                        Swal.fire(
                        'Selesai!',
                        'Laporan berhasil dihapus.',
                        'success'
                        )
                        navigate('/report/my-report');
                    }
                } ).catch( error => {
                    MySwal.fire({
                        icon: 'warning',
                        title: error.response.data.message,
                    })
                } )
            }
        })
    }

    const handleDeleteReply = (id, id_laporan) => {
            Swal.fire({
                title: 'Yakin ingin menghapus pesan ini?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, hapus!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const token = getCookie('token');
                    axios({
                        url: `${API_KEY_REPLY}/${id}/${id_laporan}`,
                        method: "DELETE",
                        headers: {  
                            authorization: `Bearer ${token}`
                        }
                    }).then( data => {
                        if(data.data) {
                            Swal.fire(
                            'Terhapus!',
                            'Pesan berhasil dihapus.',
                            'success'
                            )
                        }
                    } ).catch( error => {
                        MySwal.fire({
                            icon: 'warning',
                            title: error.response.data.message,
                        })
                    } )
                }
            })
    }

    const ReplyComponent = () => {
        if(detailLaporan.laporan.status === 'posted') {
            return <Reply id={id} session={session} MySwal={MySwal}/>
        }
    }
    
  return (
    <>
    <CarouselBS/>
    <Breadcrumb className='px-3 py-5'>        
            <Link to='/' className='text-danger breadcrumb-item'>Beranda</Link>
            <Link to='/report' className='text-danger breadcrumb-item'>Pelaporan</Link>
            <Link to={'/report/' + detailLaporan.laporan.subcategory} className='text-danger breadcrumb-item'>List kategori pelaporan</Link>
            <Breadcrumb.Item active>{detailLaporan.laporan.title}</Breadcrumb.Item>
    </Breadcrumb>
    <section className='section-report container border border-danger border-3 rounded my-3'>
        <Row>
            <Col xs='10'>
                { session.name === detailLaporan.laporan.user.name && (
                        <>
                            { detailLaporan.laporan.status === 'posted' && (
                                <>
                                    <Button className='bg-success btn-sm border-0 text-light m-2' onClick={() => handleSolveReport(detailLaporan.laporan._id)}><FaCheck/> <span className='report-text-button'>Tandai sudah selesai</span></Button>
                                    <Button className='bg-primary btn-sm border-0 text-light m-2'><FaEdit/> <span className='report-text-button'>Edit</span></Button>
                                </>
                            ) }
                            { detailLaporan.laporan.status === 'solved' && (
                                <Button className='bg-success btn-sm border-0 text-light m-2'><FaCheck/> Laporan Selesai</Button>
                            ) }
                            { Math.sign(timer?.seconds) === -1 ? (
                            <Button className='bg-danger btn-sm border-0 text-light m-2'><FaTimes/> Expired</Button>
                            ) : (
                            <Button className='bg-danger btn-sm border-0 text-light m-2' onClick={ () => handleDeleteLaporan(detailLaporan.laporan._id) }><FaTrash/> <span className='report-text-button'>Hapus</span></Button>
                            ) }
                        </>
                        ) }
                {  }
            </Col>
        </Row>
        <Row className='d-flex justify-content-start p-3'>
            <Col xs='5' md='2'>
                <img src={ detailLaporan.laporan.image[0] ? `https://api-bangkit.up.railway.app/${detailLaporan.laporan.image[0]}`: `https://api-bangkit.up.railway.app/${detailLaporan.laporan.user.image}`} className='img-fluid' />
            </Col>
            <Col xs='12' md='8'>
                <h3 className='fw-bold text-decoration-underline text-danger py-3'>{detailLaporan.laporan.title}</h3>
                <p className='fw-bold text-dark pt-2'>Deskripsi :</p>
                <p className='fw-bold text-dark py-2'>{detailLaporan.laporan.content}</p>
                <Row className='d-flex justify-content-between f-wrap'>
                    <Col xs='10' sm='6'>
                    <h6 className='text-dark text-report-user-text my-3'><FaUserAlt className='text-report-user-icon text-danger fs-5 ms-2'/> {detailLaporan.laporan.user.name}</h6>
                    </Col>
                    <Col  xs='10' sm='6'>
                    <h6 className='text-dark text-report-user-text my-3'><FaClock className='text-report-user-icon text-danger fs-5 ms-2'/> {detailLaporan.laporan.date}</h6>
                    </Col>
                    <Col  xs='10' sm='6'>
                    <h6 className='text-dark text-report-user-text my-3'><FaClipboard className='text-report-user-icon text-danger fs-5 ms-2'/> {detailLaporan.laporan.category}</h6>
                    </Col>
                    <Col  xs='10' sm='6'>
                    </Col>
                    <h6 className='text-dark text-report-user-text my-3'><FaClipboardList className='text-report-user-icon text-danger fs-5 ms-2'/> {detailLaporan.laporan.subcategory}</h6>
                    { detailLaporan.laporan.status === 'posted' && (
                        <h6 className='text-dark text-report-user-text my-3'><FaClock className='text-report-user-icon text-danger fs-5 ms-2'/> {`Forum akan berakhir dalam, ${timer?.days} hari ${timer?.hours} jam ${timer?.minutes} menit`}</h6>
                    ) }
                </Row>
            </Col>
        </Row>
    </section>
    <section className='section-reply my-5'>
        <Row className='col-12 col-md-10 mx-auto'>
            { data?.reply?.map( (item, index)  =>(
                <Card key={index} className='border-0 shadow-md border-top bg-soft-light border-bottom rounded-0'>
                    <Row  className={ item.data_user.name === session.name ? 'd-flex justify-content-between row-reverse w-100 position-relative' : 'd-flex justify-content-between flex-row-reverse w-100 position-relative' }>
                    { item.data_user.name === session.name && (
                        <span className='bg-danger position-absolute top-0 end-0 text-light text-center m-3 rounded' onClick={ () => handleDeleteReply(item.data_reply._id, detailLaporan.laporan._id) } style={{ width:'60px', cursor:'pointer' }}><FaTrash/></span>
                    )
                    }
                        <Card.Header className={item.data_user.name === session.name ? 'col-4 col-sm-3 border-0' : 'col-4 col-sm-3 border-0'}>
                            <img src={`https://api-bangkit.up.railway.app/${item.data_user.image}`} className='mb-3 img-header-reply rounded-circle' width='100' height='100' />
                            <p className='fw-semibold text-header-reply'>{item.data_user.name} <FaCheckCircle className='text-third'/></p>
                            <p className='fw-semibold text-header-reply'>{item.data_user.email}</p>
                        </Card.Header>
                        <Card.Body className={ item.data_user.name === session.name ? 'col-7 col-sm-9' : 'col-7 col-sm-9 text-end'}>
                            <small className='mb-3 text-body-reply-date'>{item.data_reply.date}</small>
                            <p className='fw-500 text-body-reply-content'>{item.data_reply.content}</p>
                            { item.data_reply.image[0] && (
                            <img src={`https://api-bangkit.up.railway.app/${item.data_reply.image[0]}`} alt='image-reply' width='300' className='img-reply' />
                            ) }
                        </Card.Body>
                    </Row>
                </Card>
            ) ) }
                { <ReplyComponent/> }
        </Row>
    </section>
    </>
  )
}

export default SectionDetailReport;
   