import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Homepage from '../../assets/png/homepage.jpg'
import CarouselBS from '../carousel/CarouselBS'



function Header() {

  const {session} = useSelector( state => state.userSession );
  
  return (
    <header className='container p-3 mt-5 mb-3'>
        <Row className='header-section d-flex justify-content-around f-wrap'>
            <Col xs='10' xl='7' className='mx-auto d-flex justify-content-center flex-column'>
            { session ? (
              <aside>
                  <h1 className='text-header-2'>Selamat Datang Kembali, <span className='text-danger'>{session.name}</span></h1>
              </aside>
            ) : (
              <aside>
                <h5 className='text-danger'>#LawanPandemi</h5>
                <h1 className='text-header mb-3 text-dark'>Bangkit bersama dari Pandemi <span className='text-danger'>Covid-19</span></h1>
                <h5 className='text-gray mb-4 text-break'>Buat akun dan terhubung langsung dengan instansi - instansi yang akan membantumu</h5>
                <div className='col-10 col-sm-6'>
                <Link to='/register' className='w-100'>
                    <button className="learn-more w-100">
                      <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                      </span>
                      <span className="ms-5 button-text">Daftar Sekarang</span>
                    </button>
                </Link>
                </div>
              </aside>
            ) }
            </Col>
            <Col xs='8' xl='5' className='mx-start'>
                <img src={Homepage} className='img-fluid' />
            </Col>
        </Row>
        <Row>
          <Container fluid className='my-5'>
              <CarouselBS/>
          </Container>
        </Row>
    </header>
  )
}

export default Header
