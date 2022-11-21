import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import BannerFeature from '../../components/BannerFeature'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loading from '../../components/loader/Loading'
import Navigation from '../../components/Navigation'
import SectionAbout from '../../components/SectionAbout'
import SectionContactUs from '../../components/SectionContactUs'
import SectionCovidInfo from '../../components/SectionCovidInfo'
import SectionJoinUs from '../../components/SectionJoinUs'
import SectionSymptom from '../../components/SectionSymptom'


function Homepage() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    window.scrollTo(0, 0);
      setTimeout( () => {
        setIsLoading(false);
      }, 1500 )
  }, [] )
  return (
    <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
            <Header/>
            <BannerFeature/>
            <SectionSymptom/>
            <SectionCovidInfo/>
            <SectionJoinUs/>
            <SectionContactUs/>
          </>
        ) }
    </>
  )
}
export default Homepage