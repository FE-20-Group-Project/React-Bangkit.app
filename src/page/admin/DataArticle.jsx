import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Loading from '../../components/loader/Loading'
import { Link } from 'react-router-dom'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import axios from 'axios'
import { API_KEY_ARTICLE } from '../../env/env'
import { getCookie } from '../../cookie/cookie'
import NavSide from '../../components/navigation/NavSide'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function DataArticle() {

    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getAPI(API_KEY_ARTICLE).then( data => {
            setArticle(data);
            setIsLoading(false);
        } )
    }, [isLoading] );

    const getAPI = async (api) => {
        const response = await axios.get(api);
        const result = response.data.data;
        return result;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Yakin ingin menghapus Artikel berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${API_KEY_ARTICLE}/${id}`,
                    method: "DELETE",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Terhapus!',
                          'Artikel berhasil dihapus.',
                          'success'
                        )
                        setIsLoading(true);
                    }
                } )
            }
          })
    }

  return (
    <>
        { isLoading ? (
            <Loading/>
        ) : (
        <Container fluid>
            <Row>
              <NavSide/>
              <section className='dashboard-content col-10 px-0'>
                  <DashboardTopBar/>
                        <main className='my-3 p-3'>
                            <Card className='table-responsive'>
                                <Card.Header>
                                    <Link to='/dashboard-admin/article/add-article' className='btn btn-primary btn-sm'><FaPlus/> Tambah Article</Link>
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th className='text-category'>No</th>
                                        <th className='text-category'>Gambar Artikel</th>
                                        <th className='text-category'>Judul Artikel</th>
                                        <th className='text-category'>Publisher</th>
                                        <th className='text-category'>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { article.map( (item, index) => {
                                    return (  
                                        <tr key={item._id}>
                                            <td className='text-category'>{index + 1}</td>
                                            <td>
                                                <img src={'https://api-bangkit.up.railway.app/'+item.image} width='80' />
                                            </td>
                                            <td className='text-category'>{item.title}</td>
                                            <td className='text-category'>{item.author}</td>
                                            <td>
                                                <Link to='' className='btn btn-warning btn-sm w-100 mb-3'>
                                                    <FaEdit/>
                                                </Link>
                                                <Button variant='danger' onClick={ () => handleDelete(item._id) } className='btn-sm w-100'>
                                                    <FaTrash/>
                                                </Button>
                                            </td>
                                        </tr>
                                        )
                                     } ) }
                                </tbody>
                            </Table>
                            </Card>
                        </main>
              </section>
            </Row>
        </Container>
        ) }
    </>
  )
}

export default DataArticle
