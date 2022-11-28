import React from 'react'
import { Carousel } from 'react-bootstrap'
import Pandemic from '../../assets/png/pandemic1.png'
import Beasiswa from '../../assets/png/beasiswa2.png'
import JobSeeker from '../../assets/png/jobseeker2.png'

function CarouselBS() {
  return (
    <Carousel className='box-shadow'>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={JobSeeker}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={Pandemic}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={Beasiswa}
            alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBS
