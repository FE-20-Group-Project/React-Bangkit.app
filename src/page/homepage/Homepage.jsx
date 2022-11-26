import React, { useEffect, useState } from 'react'
import BannerFeature from '../../components/banner/BannerFeature'
import Header from '../../components/header/Header'
import Loading from '../../components/loader/Loading'
import SectionCovidInfo from '../../components/section/SectionCovidInfo'
import SectionJoinUs from '../../components/section/SectionJoinUs'
import SectionSymptom from '../../components/section/SectionSymptom'
import SectionContactUs from '../../components/section/SectionContactUs'
import { useSelector } from 'react-redux'


function Homepage() {
  const [ isLoading, setIsLoading ] = useState(true);
  const {isLogin} = useSelector( state => state.userSession );

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