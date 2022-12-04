import React, {useState, useEffect} from 'react'
import { API_KEY_ARTICLE } from '../../../env/env'
import Loading from '../../../components/loader/Loading'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../../../components/navigation/Navigation'
import { Container, Row, Col } from 'react-bootstrap'
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
      getApiArticle(`${API_KEY_ARTICLE}/${id}`).then( data => {
          setDetailArticle(data);
          setIsLoading(false);
      } )

      getApiArticle(API_KEY_ARTICLE).then( data => {
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

console.log(listArticle);
  return (
    <>
        <div className='bg-virus bg-soft-light'>
            { isLoading ? (
              <Loading/>
            ) : (
              <>
            <Navigation/>
            <section className='article-first py-5'>
                <h2 className='container fw-bold text-danger'>{detailArticle.title}</h2>
                <Row className='d-flex justify-content-center p-0 m-0'>
                <Col xs="10" className='m-3 rounded'>
                    <Row className='d-flex justify-content-around p-0 m-0'>
                        <Col xs='10' className='p-3'>
                            <img src={`https://api-bangkit.up.railway.app/${detailArticle?.image}`} className='img-fluid w-100' />
                        </Col>
                        <Col xs='12' className='p-3 d-flex bg-soft-light p-3 rounded justify-content-center flex-column'>
                            <p>{detailArticle.author}</p>
                            <p>{detailArticle.publish_date}</p>
                            <p>{detailArticle.content}</p>
                        </Col>
                    </Row>
                </Col>
                </Row>
                </section>
                <section className='article-section pb-5' >
                    <Row className='d-flex justify-content-center f-wrap p-0 m-0'>
                        { listArticle?.map( (item, index) => {
                            return (
                                <Col key={index} xs="10" sm='5' className='m-3 bg-soft-light rounded rounded'>
                                    <Row className='d-flex justify-content-between p-0'>
                                        <Col xs='12' xl='6' className='p-0'>
                                            <img src={`https://api-bangkit.up.railway.app/${item.image}`} className='img-fluid w-100 h-100' />
                                        </Col>
                                        <Col xs='12' xl='6' className='p-3 d-flex justify-content-center flex-column'>
                                            <p onClick={() => redirectToArticle(item._id)} style={{ cursor: 'pointer' }} className='h5 fw-bold text-danger text-decoration-underline' >{item.title}</p>
                                            <p>{item.author}</p>
                                            <p>{item.publish_date}</p>
                                        </Col>
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
