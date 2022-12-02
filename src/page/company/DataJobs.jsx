import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import { FaUserTie, FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import Chart from '../../components/chart/Chart'
import axios from 'axios'
import { API_KEY_JOBS } from '../../env/env'
import { getCookie } from '../../cookie/cookie'


function DataJobs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );
  const [ jobs, setJobs ] = useState([]);

  useEffect( () => {
      getAPI(`${API_KEY_JOBS}/instansi`).then( data => {
          setJobs(data);
      } )
  },[session] )

  const getAPI = async (api) => {
      const token = getCookie('token');
      const response = await axios.get(api, {
          headers: {authorization:  `Bearer ${token}` },
      });
      const result = response.data.data;
      return result;
  }

 
  return (
    <>
        <Container fluid>
            <Row className='d-flex justify-content-center'>
                <section className='col-10  p-0'>
                    <DashboardTopBar/>
                    <main className='p-5'>
                    <Card className='table-responsive'>
                                <Card.Header>
                                    <Link to='/dashboard-company/jobs/add-jobs' className='btn btn-primary btn-sm'><FaPlus/> Tambah Lowongan Pekerjaan</Link>
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th>No .</th>
                                        <th>Nama Perusahaan</th>
                                        <th>Position yang dibutuhkan</th>
                                        <th>Jenis Pekerjaan</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { jobs.map( (item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.companyName}</td>
                                            <td>{item.positionName}</td>
                                            <td>{item.workType}</td>
                                            <td>
                                                <Link className='btn btn-sm btn-warning btn-sm mx-2'>
                                                    <FaEdit/>
                                                </Link>
                                                <Button variant='danger' className='btn-sm'>
                                                    <FaTrash/>
                                                </Button>
                                            </td>
                                        </tr>
                                    ) ) }
                                </tbody>
                            </Table>
                            </Card>
                    </main>
                    <Footer/>
                </section>
            </Row>
        </Container>
    </>
  )
}

export default DataJobs