import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BannerFeature from '../../components/BannerFeature'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'


function Homepage() {
  return (
    <>
        <Navigation/>
        <Header/>
        <BannerFeature/>
    </>
  )
}
export default Homepage