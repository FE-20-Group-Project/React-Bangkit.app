import React, { useState, useEffect } from 'react'
import { API_KEY_REPORT } from '../../env/env'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { FaRocketchat, FaEye, FaCheck, FaRedoAlt } from 'react-icons/fa'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loader/Loading'
import axios from 'axios';
import { useSelector } from 'react-redux'
import HeroSectionReport from '../../components/report/HeroSectionReport'
import { getCookie } from '../../cookie/cookie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function MyReport() {
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ laporan, setLaporan ] = useState([]);
    const {session} = useSelector( state => state.userSession );

    useEffect( () => {
        window.scrollTo(0, 0);
        if(!session) {
            MySwal.fire({
                icon: 'warning',
                title: 'Maaf, anda harus login untuk dapat lanjut!',
            })
            navigate('/login');
        }else {
            axios.get(API_KEY_REPORT).then( data => {
                    setLaporan(data.data.data.filter( item => item.laporan.user.name == session.name));
                    setIsLoading(false);
                    console.log(data);
                    console.log(session);
            } )
        }
    },[session, isLoading] )

    const handleEditLaporan = (id) => {
        Swal.fire({
            title: 'Yakin ingin menghapusLaporan berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
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
                            'Terhapus!',
                            'Laporan berhasil dihapus.',
                            'success'
                        )
                        setIsLoading(true);
                    }
                } )
            }
          })
    }

    console.log(laporan);
  return (
    <>
    { isLoading ? (
        <Loading/>
    ) : (
      <>
        <Navigation/>
        <section className='report-list container-fluid bg-soft-light p-5'>
            <nav className='mb-5'>
                <Row className='d-flex justify-content-center m-0 p-0'>
                    <Col xs='12' sm='5' className='p-3 text-center  border-danger border-bottom rounded-0'>
                        <Link to='/report' className='fs-5 fw-semibold text-danger p-3'>Lihat Kategori Laporan</Link>
                    </Col>
                    <Col xs='12' sm='5' className='p-3 text-center border border-danger border-bottom-0 rounded-0 '>
                        <Link to='/report/my-report' className='fs-5  fw-semibold text-danger p-3'>Lihat Laporanku</Link>
                    </Col>
                </Row>
              </nav>
            <Row className='d-flex justify-content-between m-0 p-0'>
            <aside className='col-12'>
                { laporan.map( item => {
                return ( 
                    <article key={item.id} className='border-top border-bottom shadow-md'>
                        <Row className='p-3'>
                            <Col xs='2' sm='1'>
                                <img src={ item.laporan.image[0] ? `https://api-bangkit.up.railway.app/${item.laporan.image[0]}`: `https://api-bangkit.up.railway.app/${item.laporan.user.image}`} width='30px' />
                            </Col>
                            <Col >
                                <Link className='text-category text-danger' to={'/report/detail-report/' + item.laporan._id}>{item.laporan.title}</Link>
                            </Col>
                            <Col >
                                <span className='text-category'>
                                <FaRocketchat className='text-category fs-5 me-2 text-danger'/>
                                {item.reply.length}
                                </span>
                            </Col>
                            <Col >
                                <span  className='text-category'>
                                <FaEye className='text-category fs-5 me-2 text-danger' />
                                {item.laporan.total_view}
                                </span>
                            </Col>
                            <Col xs='2' >
                                <small  className='text-category'>{item.laporan.date}</small>
                            </Col>
                            <Col xs='3' md='1'>
                            { item.laporan.status === 'solved' && (
                                <span className='text-category badge badge-pill bg-success w-100'><FaCheck/></span>
                            ) }
                            { item.laporan.status === 'posted' && (
                                <span className='text-category badge badge-pill bg-primary w-100'><FaRedoAlt/></span>
                            ) }
                            </Col>
                            <Col xs='3' md='1'>
                                <span className='text-category badge badge-pill bg-danger w-100' style={{ cursor: 'pointer' }} onClick={ () => handleEditLaporan(item.laporan._id)}>Hapus</span>
                            </Col>
                        </Row>
                    </article>
                    )
                 } ) }
            </aside>
            </Row>
        </section>
        <Footer/>
      </>
    ) }
  </>
  )
}

export default MyReport
