import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function HeaderInfoDashboard({favIcon, users, instansi, laporan}) {

    const { FaUserAlt, FaBuilding, FaBullhorn } = favIcon;

  return (
    <header className='container-fluid bg-secondary py-5'>
        <Row className='d-flex justify-content-around'>
            <Card className='col-10 col-md-3 m-3 p-3 border-start border-success border-5 border-0 shadow-lg'>
                <Row className='d-flex justify-content-start py-3'>
                    <Col xs='3'>
                    <FaUserAlt className='fs-1 text-success'/>
                    </Col>
                    <Col xs='5' >
                    <span className='fs-2 fw-semibold'>{users}</span>
                    </Col>
                </Row>
                <h5>Total Pengguna</h5>
            </Card>
            <Card className='col-10 col-md-3 m-3 p-3  border-start border-primary border-5 border-0 shadow-lg'>
                <Row className='d-flex justify-content-start py-3'>
                    <Col xs='3'>
                    <FaBuilding className='fs-1 text-primary'/>
                    </Col>
                    <Col xs='5' >
                    <span className='fs-2 fw-semibold'>{instansi}</span>
                    </Col>
                </Row>
                <h5>Total Instansi</h5>
            </Card>
            <Card className='col-10 col-md-3 m-3 p-3  border-start border-danger border-5 border-0 shadow-lg'>
                <Row className='d-flex justify-content-start py-3'>
                    <Col xs='3'>
                    <FaBullhorn className='fs-1 text-danger'/>
                    </Col>
                    <Col xs='5' >
                    <span className='fs-2 fw-semibold'>{laporan}</span>
                    </Col>
                </Row>
                <h5>Total Pelaporan</h5>
            </Card>
        </Row>
    </header>
  )
}

export default HeaderInfoDashboard
