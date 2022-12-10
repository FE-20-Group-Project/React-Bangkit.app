import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ArticleSection({article}) {

  return (
    <>
        <section className='article-first py-5'>
          <h1 className='text-center fw-bold text-header-2'>Portal Berita Perkembangan terbaru <span className='text-danger mb-3'>COVID-19</span></h1>
          <Row className='d-flex justify-content-center p-0 m-0'>
          <Col xs="10" className='m-3 bg-soft-light shadow-lg rounded'>
              <Row className='d-flex justify-content-center p-0 m-0'>
                  <Col xs='12' md='6' className='p-3'>
                      <img src={`https://api-bangkit.up.railway.app/${article[2]?.image}`} className='img-fluid w-100' />
                  </Col>
                  <Col xs='12' md='6' className='p-3 d-flex justify-content-center flex-column'>
                      <Link to={`/article/detail-article/${article[2]._id}`} className='h2 fw-bold mb-3 text-danger' >{article[2].title}</Link>
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
                          <Card key={index} className='col-10 col-sm-3 p-0 m-3 bg-soft-light shadow-lg rounded'>                       
                                <Card.Header className='p-0'>
                                    <img src={`https://api-bangkit.up.railway.app/${item.image}`} className='w-100 rounded-top' style={{ height:'200px' }} />
                                </Card.Header>
                                <Card.Body className='p-3 d-flex justify-content-center flex-column'>
                                    <Link to={`/article/detail-article/${item._id}`} className='h5 fw-bold text-danger text-decoration-underline' >{item.title}</Link>
                                    <p>{item.publish_date}</p>
                                </Card.Body>
                          </Card>
                    )
                } ) }
            </Row>
        </section>
    </>
  )
}

export default ArticleSection
