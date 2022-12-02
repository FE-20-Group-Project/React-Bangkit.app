import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Badge, Button, Breadcrumb } from 'react-bootstrap'
import Reply from './Reply';
import CarouselBS from '../../components/carousel/CarouselBS'
import { Link } from 'react-router-dom';
import io from 'socket.io-client'
import axios from 'axios';
import { getCookie } from '../../cookie/cookie';
import { API_KEY_REPLY, API_KEY_REPORT } from '../../env/env';
import { FaTrash, FaClock, FaUserAlt, FaEdit, FaClipboard, FaClipboardList, FaCheck, FaMailBulk, FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux';

const socket = io.connect("https://api-bangkit.up.railway.app");
const MySwal = withReactContent(Swal)

function SectionDetailReport({id, detailLaporan, setIsLoading}) {
    const {session} = useSelector( state => state.userSession );
    const [ data, setData ] = useState([]);
    const [ trending, setTrending ] = useState([]);
    useEffect( () => {
        socket.on("laporan", (event) => {
                setData(event);
            console.log(event);
        })
    }, [socket, session] )

    const getAPI = async (api) => {
        const response = await axios(api);
        const result = response.data.data;
        return result;
    }

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
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                        'Selesai!',
                        'Laporan berhasil ditutup.',
                        'success'
                        )
                    }
                } )
            }
        })
    }

    const handleDeleteReply = (id) => {
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
                        url: `${API_KEY_REPLY}/${id}`,
                        method: "DELETE",
                        headers: {  
                            authorization: `Bearer ${token}`
                        }
                    }).then( data => {
                        console.log(data);
                        if(data.data) {
                            Swal.fire(
                            'Terhapus!',
                            'Pesan berhasil dihapus.',
                            'success'
                            )
                        }
                    } )
                }
            })
    }
    console.log(detailLaporan)

  return (
    <>
    <CarouselBS/>
    <Breadcrumb className='p-5'>        
            <Link to='/' className='text-danger breadcrumb-item'>Beranda</Link>
            <Link to='/report' className='text-danger breadcrumb-item'>Pelaporan</Link>
            <Link to={'/report/' + detailLaporan.laporan.subcategory} className='text-danger breadcrumb-item'>List kategori pelaporan</Link>
            <Breadcrumb.Item active>{detailLaporan.laporan.title}</Breadcrumb.Item>
    </Breadcrumb>
    <section className='section-report container border my-3'>
        <Row className='d-flex justify-content-start p-3'>
            <Col xs='2'>
                <img src={`https://api-bangkit.up.railway.app/${detailLaporan.laporan.user.image}`} className='img-fluid' />
            </Col>
            <Col xs='5'>
                <h3 className='fw-bold text-decoration-underline text-danger py-3'>{detailLaporan.laporan.title}</h3>
                <Row className='d-flex justify-content-between'>
                    <Col xs='6'>
                    <h6 className='text-dark my-3'><FaUserAlt className='fs-5 ms-2'/> {detailLaporan.laporan.user.name}</h6>
                    </Col>
                    <Col xs='6'>
                    <h6 className='text-dark my-3'><FaClock className='fs-5 ms-2'/> {detailLaporan.laporan.date}</h6>
                    </Col>
                    <Col xs='6'>
                    <h6 className='text-dark my-3'><FaClipboard className='fs-5 ms-2'/> {detailLaporan.laporan.category}</h6>
                    </Col>
                    <Col xs='6'>
                    <h6 className='text-dark my-3'><FaClipboardList className='fs-5 ms-2'/> {detailLaporan.laporan.subcategory}</h6>
                    </Col>
                </Row>
            </Col>
            { session.name === detailLaporan.laporan.user.name && (
                <Col xs='3'>
                { detailLaporan.laporan.status === 'posted' && (
                    <>
                    <Button className='bg-success btn-sm border-0 text-light m-2' onClick={() => handleSolveReport(detailLaporan.laporan._id)}><FaCheck/> Tandai sudah selesai</Button>
                    <Button className='bg-primary btn-sm border-0 text-light m-2'><FaEdit/> Edit</Button>
                    </>
                ) }
                { detailLaporan.laporan.status === 'solved' && (
                    <Button className='bg-success btn-sm border-0 text-light m-2'><FaCheck/> Laporan Selesai</Button>
                ) }
                    <Button className='bg-danger btn-sm border-0 text-light m-2' onClick={ () => handleDeleteLaporan(detailLaporan.laporan._id) }><FaTrash/> Hapus</Button>
                </Col>
            ) }
        </Row>
    </section>
    <section className='section-reply my-5'>
        <Row className='col-10 mx-auto'>
            { data?.data?.reply?.map( (item, index)  =>(
                <Card key={index} className='border-0 shadow-md border-top bg-soft-light border-bottom rounded-0'>
                    <Row  className={ item.data_user.name === session.name ? 'd-flex justify-content-between row-reverse w-100 position-relative' : 'd-flex justify-content-between flex-row-reverse w-100 position-relative' }>
                    { item.data_user.name === session.name && (
                        <span className='bg-danger position-absolute top-0 end-0 text-light text-center m-3 rounded' onClick={ () => handleDeleteReply(item.data_reply._id) } style={{ width:'60px' }}><FaTrash/></span>
                    )
                    }
                        <Card.Header className={item.data_user.name === session.name ? 'col-3 border-0' : 'col-3 border-0'}>
                            <img src={`https://api-bangkit.up.railway.app/${item.data_user.image}`} className='mb-3' width='100' />
                            <p className='fw-semibold'>{item.data_user.name} <FaCheckCircle className='text-third'/></p>
                            <p className='fw-semibold'>{item.data_user.email}</p>
                        </Card.Header>
                        <Card.Body className={ item.data_user.name === session.name ? 'col-9' : 'col-9 text-end'}>
                            <small className='mb-3'>{item.data_reply.date}</small>
                            <p className='fw-500'>{item.data_reply.content}</p>
                            { item.data_reply.image[0] && (
                            <img src={`https://api-bangkit.up.railway.app/${item.data_reply.image[0]}`} width='300' />
                            ) }
                        </Card.Body>
                    </Row>
                </Card>
            ) ) }
            { detailLaporan.laporan.status === 'posted' && (
                    <Reply id={id} setIsLoading={setIsLoading}/>
            ) }
        </Row>
    </section>
    </>
  )
}

export default SectionDetailReport;
   