import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import { FaEdit, FaTrash, FaPlus, FaInfoCircle } from 'react-icons/fa'
import { API_KEY_REPORT } from '../../env/env'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import NavSide from '../../components/navigation/NavSide'
import axios from 'axios'
import Loading from '../../components/loader/Loading'


function DataReport() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );
  const [ isLoading, setIsLoading ] = useState(true);
  const [ report, setReport ] = useState([]);

  useEffect( () => {
        getAPI(API_KEY_REPORT).then( data => {
            console.log(data);
            setReport(data.filter( item => item.laporan.status === 'posted' ));
            setIsLoading(false);
        } )
  }, [] )

  const getAPI = async (api) => {
    const response = await axios.get(api);
    const result = response.data.data;
    return result;
  }
  

  return (
    <>
        { isLoading ? (
            <Loading/>
        ) : (
            <>
                <Container fluid>
                    <Row className='d-flex justify-content-center'>
                        <NavSide/>
                        <section className='dashboard-content col-10 px-0'>
                            <DashboardTopBar/>
                    
                            <main className='my-3 p-3'>
                            <Card className='table-responsive col-12'>
                                        <Card.Header>
                                        Data Pelaporan Masalah
                                        </Card.Header>
                                    <Table className='table-bordered'>
                                        <thead>
                                            <tr align='center'>
                                                <th className='text-category'>No</th>
                                                <th className='text-category'>Gambar</th>
                                                <th className='text-category'>Title</th>
                                                <th className='text-category'>Kategori</th>
                                                <th className='text-category'>Sub Kategori</th>
                                                <th className='text-category'>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { report.map( (item, index )=> (
                                                <tr key={index} align='center'>
                                                    <td className='text-category'>{index+1}</td>
                                                    <td >
                                                    <img src={ item.laporan.image[0] ? `https://api-bangkit.up.railway.app/${item.laporan.image[0]}` : `https://api-bangkit.up.railway.app/${item.laporan.user.image}`} width='60' />
                                                    </td>
                                                    <td className='text-category'>{item.laporan.title}</td>
                                                    <td className='text-category'>{item.laporan.category}</td>
                                                    <td className='text-category'>{item.laporan.subcategory}</td>
                                                    <td className='text-category'>
                                                        <Link to={`/report/detail-report/${item.laporan._id}`} className='btn btn-sm btn-warning btn-sm w-100'>
                                                        <FaInfoCircle/>
                                                        </Link>
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
        ) }
    </>
  )
}

export default DataReport