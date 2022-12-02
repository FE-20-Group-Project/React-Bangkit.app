import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY_REPORT } from '../../env/env';
import HeaderReport from '../../components/report/HeaderReport'
import SectionReportList from '../../components/report/SectionReportList'
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loader/Loading';

function ReportList() {
  const {subcategory} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ subCategory, setSubCategory ] = useState([]);

  useEffect( () => {
      axios.get(API_KEY_REPORT).then( data => {
                setSubCategory(data.data.data);
                setIsLoading(setIsLoading(false));
          } )
    
  },[] )
  console.log(subCategory)
  return (
        <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
          <Navigation/>
            <HeaderReport/>
            <SectionReportList subcategory={subcategory} laporan={subCategory} />
          <Footer/>
          </>
        ) }
        </>
  )
}

export default ReportList
