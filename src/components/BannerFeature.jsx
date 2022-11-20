import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap'
import Beasiswa from '../assets/png/beasiswa4.png'
import Loker from '../assets/png/section.png'
import Bangkit from '../assets/png/bangkit2.png'

function BannerFeature() {
  return (
    <section className='container-fluid bg-danger banner-feature py-3 mb-3'>
      <Row className='d-flex justify-content-center col-10 mx-auto py-3'>
            <Col xs='5'>
                <h3 className='text-light fw-bold my-3'>Apa itu Bangkit ?</h3>
                <p className='text-wrap text-light'>Bangkit adalah suatu platform untuk menghubungkan masyarakat umum yang terdampak pandemi dari sektor ekonomi, kesehatan dan pendidikan dengan instansi atau perusahaan atau pemerintah yang menyediakan bantuan atau solusi dari adanya permasalahan-permasalahan yang muncul akibat pandemi.</p>
                <Link to='/about-us' className='btn btn-primary btn-md w-50'>Lihat selengkapnya</Link>
            </Col>
            <Col xs='5'>
                <img className='img-fluid rounded' src={Bangkit} />
            </Col>
        </Row>
        <h3 className='text-center text-light fw-bold my-3'>Bantuan yang kami tawarkan</h3>
            <Row className='d-flex col-10 mx-auto text-light justify-content-around flex-wrap'>
            <Col xs='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Loker} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h3 className='fw-semibold border-bottom border-3 border-danger'>Job Seeker</h3>
                            <p>Lowongan terbuka untuk para pekerja yang kesulitan dalam mencari pekerjaan di masa pandemi yang kian meluas.</p>
                        </div>
                    </div>
                    <Link to='/jobs' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
            <Col xs='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-5'>
                            <img src={Beasiswa} className='img-fluid' />
                        </div>
                        <div className="col-7">
                            <h3 className='fw-semibold border-bottom border-3 border-danger'>Beasiswa</h3>
                            <p>Bantuan bagi para pelajar atau mahasiswa yang kesulitan dalam melanjutkan pendidikan dikarenakan keterbatasan ekonomi.</p>
                        </div>
                    </div>
                    <Link to='/scholarship' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
   
            </Row>
    </section>
  )
}

export default BannerFeature
