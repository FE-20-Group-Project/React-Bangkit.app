import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap'
import Beasiswa from '../../assets/png/beasiswa4.png'
import Pandemic from '../../assets/png/pandemic.png'
import Loker from '../../assets/png/section.png'
import Report from '../../assets/png/reporrt.png'
import Bangkit from '../../assets/png/bangkit2.png'

function BannerFeature() {
  return (
    <section className='container-fluid bg-danger bg-rain banner-feature py-5'>
      <Row className='d-flex justify-content-center col-10 mx-auto py-3 f-wrap'>
            <Col xs='12' md='6'>
                <h3 className='text-light fw-bold my-3'>Apa itu Bangkit ?</h3>
                <p className='text-wrap text-light'>Bangkit adalah suatu platform untuk menghubungkan masyarakat umum yang terdampak pandemi dari sektor ekonomi, kesehatan dan pendidikan dengan instansi atau perusahaan atau pemerintah yang menyediakan bantuan atau solusi dari adanya permasalahan-permasalahan yang muncul akibat pandemi.</p>
                <Link to='/about-us' className='btn btn-primary btn-md col-10 col-sm-6 col-md-6'>Lihat selengkapnya</Link>
            </Col>
            <Col xs='10' md='6'>
                <img className='img-fluid rounded' src={Bangkit} />
            </Col>
        </Row>
        <h3 className='text-center text-light fw-bold my-3'>Bantuan yang kami tawarkan</h3>
            <Row className='d-flex col-12 col-md-10 mx-auto text-light justify-content-around flex-wrap'>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Loker} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h5 className='fw-semibold border-bottom border-3 border-danger'>Penyedia Loker</h5>
                            <small className='text-card'>Fitur yang menyediakan Lowongan Pekerjaan yang di sediakan langsung dari Instansi yang sudah terdaftar di Aplikasi bangkit.</small>
                        </div>
                    </div>
                    <Link to='/jobs' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Beasiswa} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h5 className='fw-semibold border-bottom border-3 border-danger'>Beasiswa</h5>
                            <small className='text-card'>Menyediakan informasi mengenai Beasiswa yang disediakan oleh Instansi terpercaya yang sudah terdaftar di Aplikasi Bangkit.</small>
                        </div>
                    </div>
                    <Link to='/scholarship' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Pandemic} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h5 className='fw-semibold border-bottom border-3 border-danger'>Portal Berita</h5>
                            <small className='text-card'>Menyediakan informasi yang konkrit dan aktual untuk mengatasi hoax yang beredar di masyarakat pada masa pandemi sehingga menimbulkan ketakutan dan kepanikan</small>
                        </div>
                    </div>
                    <Link to='/article' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Report} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h5 className='fw-semibold border-bottom border-3 border-danger'>Pelaporan Masalah</h5>
                            <small className='text-card'>Fitur pelaporan masalah adalah forum dimana user dapat membuat laporan dan saling berdiskusi untuk membantu satu sama lain.</small>
                        </div>
                    </div>
                    <Link to='/report' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
   
            </Row>
    </section>
  )
}

export default BannerFeature
