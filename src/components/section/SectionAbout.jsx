import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Fazlu from '../../assets/profile/FazluRachman.png'
import Naftali from '../../assets/profile/NaftaliSKP.jpg'
import Zainul from '../../assets/profile/ZainulAnwarAdiP.jpg'
import Gibran from '../../assets/profile/DaarusyGibran.png'
import Fawwaz from '../../assets/profile/FawwazArfiqi.jpeg'
import Belva from '../../assets/profile/BelvaAprilliano Annyndra.png.jpg'
import Mila from '../../assets/profile/SyafiatulKamila.png'
import Bangkit from '../../assets/png/bangkit2.png'

function SectionAbout() {
  return (
    <>
    <section className='about-section container-fluid bg-primary p-5'>
        <Row className='d-flex justify-content-between f-wrap'>
            <Col xs='12' xl='5' className='d-flex justify-content-center flex-column'>
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
            <Col xs='10' md='7' xl='5'>
              <img className='img-fluid' src={Bangkit} />
            </Col>  
        </Row>
    </section>
    <section className='visi-misi-section container-fluid py-5 bg-soft-light'>
        <Row className='d-flex justify-content-around'>
          <Col xs='10' md='5' className='p-3'>
            <h5 className='text-danger'>Visi Bangkit</h5>
            <h3 className='text-header-2 text-primary'>solusi digital inovatif untuk penerima dampak pandemi covid-19 di Indonesia</h3>
            <p>Visi Bangkit adalah menjadi solusi digital inovatif untuk mengatasi permasalahan yang diakibatkan oleh dampak pandemi covid-19 di Indonesia.</p>
          </Col>
          <Col xs='10' md='5' className='p-3'>
            <h5 className='text-danger'>Misi Bangkit</h5>
            <h3 className='text-header-2 text-primary'>Menghadirkan fitur yang dapat menjawab permasalahan masyarakat dari berbagai sektor masalah.</h3>
            <p className='fw-light'>Bangkit memiliki misi untuk menghadirkan 2 solusi utama, yaitu <strong className='fw-bold'>pelaporan masalah</strong> yang merupakan solusi yang menekankan kolaborasi tanpa batas dimana pengguna dapat melaporkan masalahnya dan pengguna lain maupun instansi dapat membantu menyelesaikan masalah tersebut dan <strong className='fw-bold'>penyediaan informasi</strong> yang menyajikan informasi lowongan pekerjaan, beasiswa, dan artikel kesehatan yang bermanfaat bagi masyarakat Indonesia untuk dapat kembali pulih dari dampak pandemi covid-19.</p>
          </Col>
        </Row>
    </section>
    <section className='why-section container-fluid bg-soft-light mb-3 pb-5'>
      <h1 className='text-center text-dark fw-bold border-top pt-3 border-2'>Team Profile <span className='text-danger'>FE</span> & <span className='text-third'>BE</span> 8</h1>
        <Row className='d-flex justify-content-around mt-5 f-wrap'>
            <Card className='card-profile front-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md' >
                  <img src={Zainul} className='img-fluid rounded-circle mx-auto border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Zainul Anwar Adi P</h6>
                  <h6 className='fw-semibold text-center text-danger'>Front-End Dev</h6>
            </Card>
            <Card className='card-profile front-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md' >
                  <img src={Naftali} className='img-fluid rounded-circle mx-auto border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Naftali S K P</h6>
                  <h6 className='fw-semibold text-center text-danger'>Front-End Dev</h6>
            </Card>
            <Card className='card-profile front-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md' >
                  <img src={Fazlu} className='img-fluid rounded-circle mx-auto border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Fazlu Rachman</h6>
                  <h6 className='fw-semibold text-center text-danger'>Front-End Dev</h6>
            </Card>
        </Row>
        <Row className='d-flex justify-content-around mt-3 f-wrap'>
            <Card className='card-profile back-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md' >
                  <img src={Gibran} className='img-fluid rounded-circle mx-auto border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Daarusy Gibran</h6>
                  <h6 className='fw-semibold text-center text-third'>Back-End Dev</h6>
            </Card>
            <Card className='card-profile back-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md'>
                <img src={Belva} className='img-fluid rounded-circle mx-auto border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Belva Aprilliano A</h6>
                  <h6 className='fw-semibold text-center text-third'>Back-End Dev</h6>
            </Card>
            <Card className='card-profile back-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md'>
                <img src={Fawwaz} className='img-fluid rounded-circle mx-auto  border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Fawwaz Arfiqi</h6>
                  <h6 className='fw-semibold text-center text-third'>Back-End Dev</h6>
            </Card>
            <Card className='card-profile back-dev col-6 col-md-2 m-2 p-3 rounded-5 shadow-md'>
                <img src={Mila} className='img-fluid rounded-circle mx-auto  border-warning border border-3' style={{ width:'100px', height: '100px', marginTop: '-40px' }} />
                  <h6 className='fw-semibold text-center'>Syafiatul Kamila</h6>
                  <h6 className='fw-semibold text-center text-third'>Back-End Dev</h6>
            </Card>
        </Row>
    </section>
    </>
  )
}

export default SectionAbout;
