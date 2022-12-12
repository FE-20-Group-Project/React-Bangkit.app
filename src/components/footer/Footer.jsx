import React from 'react'
import LogoBangkit from '../../assets/image/bangkit.png'
import NUS from '../../assets/png/nus.png'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { FaCopyright, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='container-fluid text-light'>
        <Row className='bg-dark p-3 d-flex justify-content-between f-wrap'>
            <Col xs='10' md='5' className='ms-3'>
                <img className='rounded my-3' src={LogoBangkit} width='100px' />
                <h6>
                Group 8 Front-End & Back-End , Challange Partner : National University of Singapore, Skilvul Tech4Impact Cycle 3 MSIB Kampus Merdeka.
                </h6>
                <Row className='d-flex justify-content-start'>
                    <Col xs='2'>
                        <FaFacebook className='fs-3 m-3' />
                    </Col>
                    <Col xs='2'>
                        <FaInstagram className='fs-3 m-3' />
                    </Col>
                    <Col xs='2'>
                        <FaWhatsapp className='fs-3 m-3' />
                    </Col>
                </Row>
            </Col>
            <Col xs='8' md='3'>
            <ul>
                <ListGroup.Item className='fw-semibold my-3'>Information</ListGroup.Item>
                <Link className='text-light' to='/'>
                    <ListGroup.Item>Home</ListGroup.Item>
                </Link>
                <Link className='text-light' to='/about-us'>
                    <ListGroup.Item>About</ListGroup.Item>
                </Link>
                <a className='text-light' href={`mailto:fazrlu9575@gmail.com,`}>
                    <ListGroup.Item>Contact</ListGroup.Item>
                </a>
                <Link className='text-light' to='/report'>
                    <ListGroup.Item>Pelaporan Masalah</ListGroup.Item>
                </Link>
                <Link className='text-light' to='/jobs'>
                    <ListGroup.Item>Lowongan Kerja</ListGroup.Item>
                </Link>
                <Link className='text-light' to='/scholarship'>
                    <ListGroup.Item>Beasiswa</ListGroup.Item>
                </Link>
                <Link className='text-light' to='/article'>
                    <ListGroup.Item>Portal Berita</ListGroup.Item>
                </Link>
            </ul>
            </Col>
            <Col xs='5' md='3'>
                <p className='my-3 fw-semibold'>Challange Partner kami</p>
                <img src={NUS} width='200' />
            </Col>
        </Row>
        <Row className='py-3 bg-transparant-darker d-flex justify-content-center flex-column'>
                <p className='text-light text-center'>Copyright <FaCopyright/> Group FEBE 8 - NUS #Tech4Impact 2022 | All Right Reserved</p>
        </Row>
    </footer>
  )
}

export default Footer
