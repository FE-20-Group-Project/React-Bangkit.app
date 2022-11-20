import React from 'react'
import { Container, Row, Card, Col, Button, Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Homepage from '../assets/png/homepage.jpg'



function Header() {

  const {isLogin} = useSelector( state => state.userSession );
  
  return (
    <header className='container p-3 mt-5 mb-3'>
        <Row className='d-flex justify-content-around'>
            <Col xs='7' className='mx-auto d-flex justify-content-center flex-column'>
            { isLogin ? (
              <aside>
                  <h1 className='text-header-2'>Selamat Datang Kembali, <span className='text-danger'>{isLogin.name}</span></h1>
              </aside>
            ) : (
              <aside>
                <h1 className='text-header mb-3 text-dark'>Bangkit bersama dari Pandemi <span className='text-danger'>Covid-19</span></h1>
                <h5 className='text-gray mb-4 text-break'>Buat akun dan terhubung langsung dengan instansi - instansi yang akan membantumu</h5>
                <button className="learn-more w-50">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="ms-5 button-text">Mulai Sekarang</span>
                </button>
              </aside>
            ) }
            </Col>
            <Col xs='5' className='mx-start'>
                <img src={Homepage} className='img-fluid' />
            </Col>
        </Row>
        <Row>
          <Container fluid className='my-5'>
          <Carousel className='shadow-lg'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.montgomerycountymd.gov/library/resources/images/for-you/job-seekers-banner-image.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.montgomerycountymd.gov/library/resources/images/for-you/job-seekers-banner-image.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.montgomerycountymd.gov/library/resources/images/for-you/job-seekers-banner-image.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </Container>
        </Row>
    </header>
  )
}

export default Header
