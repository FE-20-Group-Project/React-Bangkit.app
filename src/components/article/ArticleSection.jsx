import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function ArticleSection({article}) {

  return (
    <>
        <section className='article-first py-5'>
          <h1 className='text-center fw-bold text-header-2'>Article Perkembangan terbaru <span className='text-danger mb-3'>COVID-19</span></h1>
          <Row className='d-flex justify-content-center p-0 m-0'>
          <Col xs="10" className='m-3 bg-soft-light shadow-lg rounded'>
              <Row className='d-flex justify-content-center p-0 m-0'>
                  <Col xs='12' md='6' className='p-3'>
                      <img src={`https://api-bangkit.up.railway.app/${article[2]?.image}`} className='img-fluid w-100' />
                  </Col>
                  <Col xs='12' md='6' className='p-3 d-flex justify-content-center flex-column'>
                      <p className='h2 fw-bold mb-3 text-danger' >{article[2].title}</p>
                      <p>{article[2]?.author}</p>
                      <p>{article[2]?.publish_date}</p>
                  </Col>
              </Row>
          </Col>
          </Row>
        </section>
        <section className='article-section pb-5' >
            <Row className='d-flex justify-content-center f-wrap p-0 m-0'>
                { article?.map( (item, index) => {
                    return (
                          <Col key={index} xs="10" sm='5' className='m-3 bg-soft-light shadow-lg rounded'>
                              <Row className='d-flex justify-content-between p-0'>
                                  <Col xs='10' xl='6' className='p-3'>
                                      <img src={`https://api-bangkit.up.railway.app/${item.image}`} className='img-fluid w-100 h-100' />
                                  </Col>
                                  <Col xs='10' xl='6' className='p-3 d-flex justify-content-center flex-column'>
                                      <p className='h5 fw-bold text-danger' >{item.title}</p>
                                      <p>{item.publish_date}</p>
                                  </Col>
                              </Row>
                          </Col>
                    )
                } ) }
            </Row>
        </section>
    </>
  )
}

export default ArticleSection
