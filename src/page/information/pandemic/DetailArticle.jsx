import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../../../env/env'
import Loading from '../../../components/loader/Loading'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../../../components/navigation/Navigation'
import { Breadcrumb, Row, Col } from 'react-bootstrap'
import Footer from '../../../components/footer/Footer'
import { useParams } from 'react-router-dom'

function DetailArticle() {

  const {id} = useParams();
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ detailArticle, setDetailArticle ] = useState([]);
  const [ listArticle, setListArticle ] = useState([]);

  useEffect( () => {
      window.scrollTo(0, 0);
      getApiArticle(`${BASE_URL}/api/artikel/${id}`).then( data => {
          setDetailArticle(data);
          setIsLoading(false);
      } )

      getApiArticle(`${BASE_URL}/api/artikel`).then( data => {
        setListArticle(data);
      } )
  }, [isLoading] );


  const getApiArticle = async (api) => {
      const response = await axios.get(api);
      const result = response.data.data;
      return result;
  }

  const redirectToArticle = (id) => {
    navigate(`/article/detail-article/${id}`);
    setIsLoading(true);
  }

  return (
    <>
        <div className='bg-virus bg-soft-light'>
            { isLoading ? (
              <Loading/>
            ) : (
              <>
            <Navigation/>
            <section className='article-first pt-3 bg-soft-light shadow-lg col-10 mx-auto'>
                <Breadcrumb className='px-3 py-5'>        
                    <Link to='/' className='text-danger breadcrumb-item'>Beranda</Link>
                    <Link to='/article' className='text-danger breadcrumb-item'>Portal Berita</Link>
                    <Breadcrumb.Item active>{detailArticle.title}</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className='container fw-bold text-danger'>{detailArticle.title}</h2>
                <Row className='d-flex justify-content-center p-0 m-0'>
                <Col xs="10" className='m-3 rounded'>
                    <Row className='d-flex justify-content-around p-0 m-0'>
                        <Col xs='12' sm='10' md='5' className='p-3'>
                            <img src={`${BASE_URL}/${detailArticle?.image}`} className='img-fluid w-100' />
                        </Col>
                        <Col xs='12' className='d-flex justify-content-center flex-column'>
                            <p>{detailArticle.author}</p>
                            <p>{detailArticle.publish_date}</p>
                            <p dangerouslySetInnerHTML={{__html: detailArticle.content}}></p>
                        </Col>
                    </Row>
                </Col>
                </Row>
                </section>
                <section className='article-section pb-5 shadow-lg bg-soft-light col-10 mx-auto' >
                    <Row className='d-flex justify-content-start p-3 m-0'>
                        { listArticle?.map( (item, index) => {
                            return (
                                <Col key={index} xs="10" sm='3' className='m-3'>
                                    <Row>
                                        <img style={{ width:'300px', height:'200px' }} src={`${BASE_URL}/${item.image}`}/>
                                        <p onClick={() => redirectToArticle(item._id)} style={{ cursor: 'pointer' }} className='h5 fw-bold text-danger mt-3' >{item.title}</p>
                                        <p>{item.author}</p>
                                        <p>{item.publish_date}</p>
                                    </Row>
                                </Col>
                            )
                        } ) }
                    </Row>
                </section>
                
            <Footer/>
              </>
            ) }
        </div>
    </>
  )
}

export default DetailArticle
