import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Sembako from '../../assets/png/Sembako.png'
import Uang from '../../assets/png/Uang.png'
import AlatTulis from '../../assets/png/AlatTulis.png'
import Obat from '../../assets/png/Obat.png'
import Tabung from '../../assets/png/Tabung.png'
import Masker from '../../assets/png/Masker.png'
import Profil from '../../assets/png/section.png'
import HeroSectionReport from './HeroSectionReport'
import { FaRegComments } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function SectionReportCategory({laporan, refreshApi}) {

    const {session} = useSelector( state => state.userSession );

    //Ekonomi
    const [ bahanPokok, setBahanPokok ] = useState([]);
    const [ keuangan, setKeuangan ] = useState([]);

    //Pendidikan
    const [ kuota, setKuota ] = useState([]);
    const [ bantuanPendidikan, setBantuanPendidikan ] = useState([]);

    //Kesehatan
    const [ obat, setObat ] = useState([]);
    const [ tabungOksigen, setTabungOksigen ] = useState([]);
    const [ masker, setMasker ] = useState([]);

    const [ trending, setTrending ] = useState([]);

    useEffect( () => {
        setBahanPokok(laporan.filter( item => item.laporan.subcategory === 'bahan-pokok' ));
        setKeuangan(laporan.filter( item => item.laporan.subcategory === 'Keuangan' ));

        setKuota(laporan.filter( item => item.laporan.subcategory === 'kuota-internet' ));
        setBantuanPendidikan(laporan.filter( item => item.laporan.subcategory === 'bantuan-biaya' ));

        setObat(laporan.filter( item => item.laporan.subcategory === 'obat-obatan' ));
        setMasker(laporan.filter( item => item.laporan.subcategory === 'masker' ));
        setTabungOksigen(laporan.filter( item => item.laporan.subcategory === 'tabung-oksigen' ));
        
        setTrending(laporan.sort((a, b) => (a.total_view < b.total_view ? 1 : -1)));
    },[refreshApi] )

  return (
    <>
        <HeroSectionReport/>
        <section className='report-list container-fluid p-5 bg-soft-light'>
            <nav className='mb-5'>
                <Row className='d-flex justify-content-center mx-0 px-0'>
                    <Col xs='12' sm='5' className='p-3 text-center border border-danger border-bottom-0'>
                        <Link to='/report' className='fs-5 fw-semibold text-danger p-3'>Lihat kategori Laporan</Link>
                    </Col>
                    { session.type==='user' && (
                        <Col xs='12' sm='5' className='p-3 text-center border-bottom border-danger rounded-0 rounded-0 '>
                            <Link to='/report/my-report' className='fs-5 fw-semibold text-danger p-3'>Lihat Laporanku</Link>
                        </Col>
                    ) }
                </Row>
            </nav>
            <Row className='d-flex justify-content-between f-wrap mx-0 px-0'>
                <aside className='column-category col-12 col-md-8 bg-danger border'>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3 text-light'>Ekonomi</h3>
                        <Link to='/report/bahan-pokok'>
                            <Card className='mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Sembako} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Sembako dan bahan pokok</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {bahanPokok.length }</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/Keuangan'>
                            <Card className='mb-3  rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Uang} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Keuangan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {keuangan.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3 text-light'>Pendidikan</h3>
                        <Link to='/report/bantuan-biaya'>
                            <Card className=' mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={AlatTulis} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 text-danger d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Bantuan Biaya Sekolah</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {bantuanPendidikan.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/kuota-internet'>
                            <Card className=' mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Kuota pendidikan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {kuota.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3 text-light'>Kesehatan</h3>
                        <Link to='/report/obat-obatan'>
                            <Card className=' mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Obat} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Obat-obatan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {obat.length} </p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/tabung-oksigen'>
                            <Card className=' mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>    
                                <Col xs='2' className='p-3'>
                                    <img src={Tabung} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Tabung Oksigen</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {tabungOksigen.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/masker'>
                            <Card className=' mb-3 rounded-0 border-soft-color bg-soft-light shadow-md'>
                                <Row className='d-flex justify-content-around'>    
                                <Col xs='2' className='p-3'>
                                    <img src={Masker} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger fw-semibold'>Masker</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'>Total Post : {masker.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-category text-danger'><FaRegComments className='fs-3'/></p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Row>
                </aside>
                <aside className='col-md-4 col-12 mt-3'>
                    <Row className='p-0 m-0 position-sticky' style={{ top:'40px' }}>
                        { !session && (
                            <Card className='bg-danger mx-auto text-center py-5 px-3 mb-3 position-sticky'>
                                <Card.Title className='fw-bold text-light'>Selamat datang di Bangkit</Card.Title>
                                <Card.Body className='fw-light text-light'>Join sekarang di forum bantuan kami dengan mendaftarkan akun</Card.Body>
                                <Link to='/register' className='btn btn-light w-50 mx-auto text-danger'>Daftar</Link>
                            </Card>
                        ) }
                        <Card className='bg-soft-light mx-auto p-3'>
                            <Card.Title className='border-bottom py-3'>Trending Post</Card.Title>
                                { trending.map( item => (
                                    <Card.Body key={item.laporan._id} className='bg-soft-light'>
                                        <Row className='d-flex justify-content-around'>
                                            <Col xs='3'>
                                                <img src={ item.laporan.image[0] ? `https://api-bangkit.up.railway.app/${item.laporan.image}` : `https://api-bangkit.up.railway.app/${item.laporan.user.image}`} className='img-fluid' />
                                            </Col>
                                            <Col xs='9'>
                                                <Link to={'/report/detail-report/' + item.laporan._id} className='text-danger text-category text-decoration-underline fw-500'>{item.laporan.title}</Link>
                                                <small className='text-danger text-category fw-500 d-block mt-2'>{item.laporan.date}</small>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                ) ) }
                        </Card>
                    </Row>
                </aside>
            </Row>
        </section>
    </>
  )
}

export default SectionReportCategory
