import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {API_KEY_ARTICLE } from '../env/env'
import Loading from './loader/Loading'
import axios from 'axios'

function ArticleSection() {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ article, setArticle ] = useState([]);

  useEffect( () => {
      getApiArticle(API_KEY_ARTICLE).then( data => {
          setArticle(data);
          setIsLoading(false);
      } )
  }, [] );

  const getApiArticle = async (api) => {
      const response = await axios.get(api);
      const result = response.data;
      return result;
  }


  return (
    <>
      { isLoading ? (
        <Loading/>
      ) : (
        <>
          <section className='article-first my-5 p-3'>
            <h1 className='text-center text-header-2'>Article <span className='text-danger mb-3'>COVID-19</span></h1>
            <Row className='d-flex justify-content-center'>
            <Col xs="8" className='m-3'>
                <Row className='d-flex justify-content-center p-0'>
                    <Col xs='6'>
                        <img src={article[5].image} className='img-fluid w-100' />
                    </Col>
                    <Col xs='6' className='d-flex justify-content-center flex-column'>
                        <a href={article[5].link_url} className='h2 mb-3 text-danger' >{article[5].title}</a>
                        <p>{article[5].createdAt}</p>
                        <p>{article[5].description}</p>
                    </Col>
                </Row>
            </Col>
            </Row>
          </section>
          <section className='article-section mb-5 p-3' >
              <Row className='d-flex justify-content-center'>
                  { article.map( (item, index) => {
                      return (
                            <Col key={index} xs="5" className='m-3'>
                                <Row className='d-flex justify-content-between p-0'>
                                    <Col xs='6'>
                                        <img src={item.image} className='img-fluid w-100 h-100' />
                                    </Col>
                                    <Col xs='6' className='d-flex justify-content-center flex-column'>
                                        <a href={item.link_url} className='h5 text-danger' >{item.title}</a>
                                        <p>{item.createdAt}</p>
                                        <p>{item.description}</p>
                                    </Col>
                                </Row>
                            </Col>
                      )
                  } ) }
              </Row>
          </section>
        </>

      ) }
    </>
  )
}

export default ArticleSection