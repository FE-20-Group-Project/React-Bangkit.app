import React, { useEffect, useState } from 'react'
import AddReport from '../../components/report/AddReport'
import SectionReportCategory from '../../components/report/SectionReportCategory'
import Loading from '../../components/loader/Loading';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { API_KEY_REPORT } from '../../env/env';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Report() {
  const {session} = useSelector( state => state.userSession );
  const [ laporan, setLaporan ] = useState([]);
  const [report, setReport] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( () => {
    window.scrollTo(0, 0);
    axios.get(API_KEY_REPORT).then( data => {
          setLaporan(data.data.data.filter( item => item.laporan.status === 'posted' ));
          setIsLoading(false);
      } )
      
  }, [])


  console.log(session.type);
  return (
    <>
      { isLoading ? (
          <Loading/>
      ) : (
        <>
      <Navigation/>
          <SectionReportCategory laporan={laporan} />
          { session.type === 'user' && (
            <AddReport/>
          ) }
      <Footer/>
        </>
      ) }
    </>
  )
}

export default Report
