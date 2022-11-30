import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Report from '../../assets/png/pandemic3.jpg'
import Profil from '../../assets/png/section.png'
import HeroSectionReport from './HeroSectionReport'

function SectionReportCategory({laporan, refreshApi}) {

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

    useEffect( () => {
        setBahanPokok(laporan.filter( item => item.laporan.subcategory === 'bahan-pokok' ));
        setKuota(laporan.filter( item => item.laporan.subcategory === 'kuota-internet' ));
        setObat(laporan.filter( item => item.laporan.subcategory === 'obat-obatan' ));
        setBantuanPendidikan(laporan.filter( item => item.laporan.subcategory === 'bantuan-biaya' ));
        setMasker(laporan.filter( item => item.laporan.subcategory === 'masker' ));
    },[refreshApi] )

    console.log(bahanPokok, kuota, obat, bantuanPendidikan);

  return (
    <>
        <HeroSectionReport/>
        <section className='report-list container-fluid p-5 bg-soft-light'>
            <nav className='mb-5'>
                <Row className='d-flex justify-content-center'>
                    <Col xs='5' className='p-3 text-center border border-danger border-bottom-0'>
                        <Link to='/report' className='fs-5 text-danger p-3'>Lihat Semua Laporan</Link>
                    </Col>
                    <Col xs='5' className='p-3 text-center border-bottom border-danger rounded-0 rounded-0 '>
                        <Link to='/report/my-report' className='fs-5 text-danger p-3'>Lihat Laporanku</Link>
                    </Col>
                </Row>
              </nav>
            <Row className='d-flex justify-content-between'>
                <aside className='col-8 border'>
                    <Row className='mb-3'>
                        <h3 className='fw-semibold my-3'>Ekonomi</h3>
                        <Link to='/report/bahan-pokok'>
                            <Card className='mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Sembako dan bahan pokok</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {bahanPokok.length }</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar :  </p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/keuangan'>
                            <Card className='mb-3  rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Keuangan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {keuangan.length}</p>
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
                        <Link to='/report/bantuan-biaya'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 text-danger d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Bantuan Biaya Sekolah</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {bantuanPendidikan.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/kuota-internet'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Kuota pendidikan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {kuota.length}</p>
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
                        <Link to='/report/obat-obatan'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Obat-obatan</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {obat.length} </p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/tabung-oksigen'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>    
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Tabung Oksigen</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {tabungOksigen.length}</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Komentar</p>
                                </Col>
                                </Row>
                            </Card>
                        </Link>
                        <Link to='/report/masker'>
                            <Card className=' mb-3 rounded-0 border-soft-color shadow-md'>
                                <Row className='d-flex justify-content-around'>    
                                <Col xs='2' className='p-3'>
                                    <img src={Profil} width='50'/>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger fw-semibold'>Masker</p>
                                </Col>
                                <Col xs='3' className='p-3 d-flex justify-content-center flex-column'>
                                    <p className='text-danger'>Total Post : {masker.length}</p>
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
