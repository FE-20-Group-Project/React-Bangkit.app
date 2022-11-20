import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import Bangkit from '../assets/png/bangkit2.png'
import {FcFactory, FcBusiness, FcGraduationCap, FcPlus} from 'react-icons/fc'

function SectionAbout() {
  return (
    <>
    <section className='about-section container-fluid bg-primary mb-5 p-5'>
        <Row className='d-flex justify-content-between'>
            <Col xs='5' className='d-flex justify-content-center flex-column'>
              <Row>
                  <h5 className='text-danger'>Tentang Bangkit</h5>
                  <h1 className='text-light text-header-2'>Apa sih Bangkit itu?</h1>
                  <p className='text-light'>
                  Pandemi telah menyebabkan hilangnya pekerjaan, kerawanan pangan, dampak negatif pada kualitas pendidikan dan kesejahteraan mental, ditambah dengan berbagai masalah domestik, terutama bagi keluarga berpenghasilan rendah. PPKM yang konstan dan pembatasan mobilitas telah meningkatkan situasi ini, mengakibatkan lebih banyak individu dan keluarga yang sangat membutuhkan bantuan. Namun, tidak ada platform/alat efektif yang tersedia bagi mereka untuk melaporkan dan meminta bantuan.
                  </p>
                  <p className='text-light'>
                  Bangkit adalah suatu platform untuk menghubungkan masyarakat umum yang terdampak pandemi dari sektor ekonomi, kesehatan dan pendidikan dengan instansi atau perusahaan atau pemerintah yang menyediakan bantuan atau solusi dari adanya permasalahan-permasalahan yang muncul akibat pandemi.
                  </p>
              </Row>
            </Col>
            <Col xs='5'>
              <img className='img-fluid' src={Bangkit} />
            </Col>  
        </Row>
    </section>
    <section className='visi-misi-section container-fluid mb-5 bg-light'>
        <Row className='d-flex justify-content-around'>
          <Col xs='5'>
            <h5 className='text-danger'>Visi Bangkit</h5>
            <h1 className='text-header-2 text-primary'>Sejuta digital talent untuk Indonesia</h1>
            <p>Visi kami adalah untuk menghasilkan sejuta digital talent untuk Indonesia melalui pendidikan vokasi digital.</p>
          </Col>
          <Col xs='5'>
            <h5 className='text-danger'>Visi Bangkit</h5>
            <h1 className='text-header-2 text-primary'>Sejuta digital talent untuk Indonesia</h1>
            <p>Visi kami adalah untuk menghasilkan sejuta digital talent untuk Indonesia melalui pendidikan vokasi digital.</p>
          </Col>
        </Row>
    </section>
    <section className='why-section container-fluid bg-light mb-5'>
      <h1 className='text-center text-dark fw-bold'>Kenapa Bangkit?</h1>
        <Row className='d-flex justify-content-around'>
            <Card className='col-5 m-3 p-3'>
              <Row className='d-flex justify-content-around '>
                  <Col xs='1'>
                    <FcFactory className='fs-1'/>
                  </Col>
                  <Col xs='10'>
                    <p>User akan disajikan informasi yang bersumber dari instansi (Pemerintah, Swasta, LSM), informasi yang disajikan akan terbagi menjadi 3 sektor masalah</p>
                  </Col>
              </Row>
            </Card>
            <Card className='col-5 d-flex justify-content-around m-3 p-3'>
              <Row className='d-flex justify-content-around '>
                    <Col xs='1'>
                      <FcFactory className='fs-1'/>
                    </Col>
                    <Col xs='10'>
                      <p>Bantuan dapat datang dari berbagai elemen masyarakat, mulai dari masyarakat biasa, instansi pemerintah, pihak swasta, dan LSM. Solusi ini menekankan pada kolaborasi tanpa batas. Setelah user melaporkan masalahnya, user hanya perlu menunggu sampai bantuan tiba.</p>
                    </Col>
                </Row>
            </Card>
            <Card className='col-5 d-flex justify-content-around m-3 p-3'>
              <Row className='d-flex justify-content-around '>
                    <Col xs='1'>
                      <FcGraduationCap className='fs-1'/>
                    </Col>
                    <Col xs='10'>
                      <p>Menurut United Nations International Children's Emergency Fund (UNICEF) pada hasil surveinya menunjukan bahwa dari dampak Covid-19, sebanyak 938 anak atau sekitar 1% anak mengalami putus sekolah dan 74% diantaranya memiliki alasan putus sekolah dikarenakan tidak ada biaya.</p>
                    </Col>
                </Row>
            </Card>
            <Card className='col-5 d-flex justify-content-around m-3 p-3'>
              <Row className='d-flex justify-content-around '>
                    <Col xs='1'>
                      <FcPlus className='fs-1'/>
                    </Col>
                    <Col xs='10'>
                      <p>Menurut data Kementerian Kesehatan Republik Indonesia, per tanggal 21 Februari 2021, kasus aktif covid-19 di indonesia mencapai 157.088 kasus mengalami kenaikan 1.109 kasus. </p>
                    </Col>
                </Row>
            </Card>
        </Row>
    </section>
    </>
  )
}

export default SectionAbout;
