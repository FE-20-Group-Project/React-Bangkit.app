import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Protocol from '../../assets/png/protocol.jpg'
import { API_KEY_NEWS } from '../../env/env'

function SectionCovidInfo() {

    const [ positif, setPositif ] = useState('');
    const [ meninggal, setMeninggal ] = useState('');
    const [ dirawat, setDirawat ] = useState('');
    const [ sembuh, setSembuh ] = useState('');

    useEffect( () => {
        getApiNews(API_KEY_NEWS).then( data => {
            const positif = data[0].kasus;
            setPositif(positif);
            const meninggal = data[0].meninggal;
            setMeninggal(meninggal)
            const dirawat = data[0].dirawat
            setDirawat(dirawat);
            const sembuh = data[0].sembuh;
            setSembuh(sembuh);
            
        } )
    }, [] )

    const getApiNews = async (api) => {
        const response = await axios.get(api);
        const result = response.data;
        return result;
    }

  return (
    <section className='container-fluid bg-danger bg-virus-bold banner-feature py-5'>
        <h3 className='fw-bold text-center text-light'>INFORMASI PENYEBARAN COVID 19 DI INDONESIA</h3>
        <Row className='d-flex justify-content-center text-light my-5 fw-bold'>
            <Col xs='5' sm='3' md='2' className='card-strange p-3 m-3 shadow-md bg-primary'>
                    <h5>#Positif</h5>
                    <h3>{positif}</h3>
            </Col>
            <Col xs='5' sm='3' md='2' className='card-strange p-3 m-3 shadow-md bg-third'>
                    <h5>#Meninggal</h5>
                    <h3>{meninggal}</h3>
            </Col>
            <Col xs='5' sm='3' md='2' className='card-strange p-3 m-3 shadow-md bg-warning'>
                    <h5>#Dirawat</h5>
                    <h3>{dirawat}</h3>
            </Col>
            <Col xs='5' sm='3' md='2' className='card-strange p-3 m-3 shadow-md bg-success'>
                    <h5>#Sembuh</h5>
                    <h3>{sembuh}</h3>
            </Col>
        </Row>
        <Row className='container-fluid mx-auto d-flex justify-content-around'>
            <Col xs='10' sm='6' className='d-flex p-3 justify-content-center flex-column'>
                <h1 className='text-header-2 text-light'>Ayo cegah terjadinya <span className='text-primary'>COVID-19</span> dengan menerapkan protocol berikut</h1>
            </Col>
            <Col xs='10' sm='5' className='p-3'>
                <img className='img-fluid' src={Protocol} />
            </Col>
        </Row>
    </section>
  )
}

export default SectionCovidInfo
