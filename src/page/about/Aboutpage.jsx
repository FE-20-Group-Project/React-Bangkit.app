import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Loading from '../../components/loader/Loading';
import Navigation from '../../components/Navigation';
import SectionAbout from '../../components/SectionAbout';

function Aboutpage() {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            setIsLoading(false);
        }, 1500 )
    }, [] )

  return (
    <>
        <Navigation/>
        { isLoading ? (
            <Loading/>
        ) : (
            <>
                <SectionAbout/>
                <Footer/>
            </>
        ) }
    </>
  )
}

export default Aboutpage
