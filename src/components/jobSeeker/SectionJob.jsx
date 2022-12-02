import React, { useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import { getFIlterJobs } from '../../redux/action/jobAction'
import Jobs from '../../assets/png/kerja.png'
import JobList from './JobList'
import { useDispatch, useSelector } from 'react-redux'

function SectionJob({jobs}) {
  const {session} = useSelector( state => state.userSession );
  const dispatch = useDispatch();
  const [ nameCompany, setNameCompany ] = useState('');
  const [ location, setLocation ] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
        dispatch(getFIlterJobs(nameCompany, location));
  }

  return (
    <>
      <section className='container-fluid job-section bg-light p-3 mb-5'>
        <Row className='d-flex justify-content-around f-wrap'>
            <Col xs='10' xl='5' className='p-3 d-flex justify-content-center flex-column'>
              <Row>
                <h5 className='text-danger'>Job Seeker</h5>
                  <h1 className='text-header-2 text-primary'>Solusi dalam mencari pekerjaan di masa pandemi</h1>
                  <p>Menurut Badan Pusat Statistik (BPS) tingkat pengangguran terbuka (TPT) Agustus 2020 sebesar 7,07 persen, meningkat 1,84 persen poin dibandingkan dengan Agustus 2019. Terdapat 29,12 juta orang (14,28 persen) penduduk usia kerja yang terdampak</p>
              </Row>
            </Col>
            <Col xs='10' xl='5' className='p-3'>
              <img src={Jobs} className='img-fluid w-100' />
            </Col>
        </Row>
      </section>
      <section className='job-filter mt-5 p-3 bg-danger bg-overlay'>
            <Row className='d-flex justify-content-center p-3'>
                <Col xs='10' xl='4' className='p-3' >
                    <Card className='p-3 mx-auto border-top border-5 border-third rounded position-sticky top-10 mt-5'>
                        <Card.Title className='text-center text-danger fw-semibold my-3'>Filter</Card.Title>
                        <Form onSubmit={handleFilter} >
                            <Form.Group className='mb-3'>
                                <Form.Control type='search' onChange={ (e) => setNameCompany(e.target.value) } placeholder='Nama Perusahaan' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                              <Form.Control type='search' onChange={ (e) => setLocation(e.target.value) } placeholder='Lokasi' />
                              </Form.Group>
                            <Form.Group className='w-50 mx-auto'>
                              <Button type='submit' variant='danger' className='w-100 rounded-0'><FaFilter className='ms-2'/> Filter</Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>
                <Col xs='12' xl='8' className='p-3'  style={{ height: '100vh', overflow:'scroll' }}>
                    <h2 className='text-center fw-bold text-light'>Job List</h2>
                    <JobList session={session} data={jobs} />
                </Col>
            </Row>
      </section>
    </>
  )
}

export default SectionJob
