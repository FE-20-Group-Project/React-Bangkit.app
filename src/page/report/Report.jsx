import React, { useEffect, useState } from 'react'
import AddReport from '../../components/report/AddReport'
import SectionReportCategory from '../../components/report/SectionReportCategory'
import Loading from '../../components/loader/Loading';

function Report() {

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
          <SectionReportCategory/>
          <AddReport/>
        </>
      ) }
    </>
  )
}

export default Report
