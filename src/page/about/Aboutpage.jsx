import React, { useEffect, useState } from 'react'
import Loading from '../../components/loader/Loading';
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
                <SectionAbout/>
            </>
        ) }
    </>
  )
}

export default Aboutpage
