import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loader/Loading';
import Navigation from '../../components/navigation/Navigation';
import SectionAbout from '../../components/section/SectionAbout';

function Aboutpage() {
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
        ) : (
            <>
            <Navigation/>
                <SectionAbout/>
            <Footer/>
            </>
        ) }
    </>
  )
}

export default Aboutpage
