import React, { useState } from 'react'
import Beasiswa from '../assets/png/beasiswa3.png'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import { getFilterScholarship } from '../redux/action/scholarshipAction'
import ScholarshipList from './ScholarshipList'
import { useDispatch } from 'react-redux'

function SectionScholarship({scholarship}) {
  const dispatch = useDispatch();
  const [ namaPerusahaan, setNamaPerusahaan ] = useState('');
  const [ namaBeasiswa, setNamaBeasiswa] = useState('');
  const handleFilter = (e) => {
    e.preventDefault();
        dispatch(getFilterScholarship(namaPerusahaan, namaBeasiswa));
  }

  return (
    <>

        <section className='container-fluid job-section bg-light p-3 mb-5'>
        <Row className='d-flex justify-content-around'>
            <Col xs='5' className='d-flex justify-content-center flex-column'>
              <Row>
                <h5 className='text-danger'>Beasiswa</h5>
                  <h1 className='fw-bold text-primary'>Bantuan bagi para pelajar atau mahasiswa yang kesulitan dalam melanjutkan pendidikan</h1>
                  <p>Menurut United Nations International Children's Emergency Fund (UNICEF) pada hasil surveinya menunjukan bahwa dari dampak Covid-19, sebanyak 938 anak atau sekitar 1% anak mengalami putus sekolah dan 74% diantaranya memiliki alasan putus sekolah dikarenakan tidak ada biaya.</p>
              </Row>
            </Col>
            <Col xs='5'>
              <img src={Beasiswa} className='img-fluid w-100' />
            </Col>
        </Row>
      </section>
      <section className='scolarship-filter mt-5 p-3' style={{ backgroundColor: '#e7e7e7' }}>
            <Row className='d-flex justify-content-center p-3'>
                <Col xs='4' >
                    <Card className='p-3 mx-auto border-top border-5 border-danger rounded position-sticky top-10 mt-5'>
                        <Card.Title className='text-center text-danger fw-semibold my-3'>Filter</Card.Title>
                        <Form onSubmit={handleFilter} >
                            <Form.Group className='mb-3'>
                                <Form.Control type='search' placeholder='Nama Perusahaan' onChange={ (e) => setNamaPerusahaan(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='search' placeholder='Nama Beasiswa' onChange={ (e) => setNamaBeasiswa(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='w-50 mx-auto'>
                              <Button type='submit' variant='danger' className='w-100 rounded-0'><FaFilter className='ms-2'/> Filter</Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>
                <Col xs='8'  style={{ height: '100vh', overflow:'scroll' }}>
                    <h3 className='text-center fw-semibold'>Beasiswa List</h3>
                    <ScholarshipList scholarship={scholarship}/>
                </Col>
            </Row>
      </section>
    </>
  )
}

export default SectionScholarship
