import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Loading from '../../components/loader/Loading';
import Navigation from '../../components/Navigation';
import SectionAbout from '../../components/SectionAbout';

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
                <SectionAbout/>
            </>
        ) }
    </>
  )
}

export default Aboutpage
