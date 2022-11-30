import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY_REPORT } from '../../env/env';
import HeaderReport from '../../components/report/HeaderReport'
import SectionReportList from '../../components/report/SectionReportList'
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

function ReportList() {
  const {subcategory} = useParams();
  const [ subCategory, setSubCategory ] = useState([]);

  useEffect( () => {
      axios.get(API_KEY_REPORT).then( data => {
                setSubCategory(data.data.data);
          } )
    
  },[] )
  console.log(subCategory)
  return (
        <>
          <Navigation/>
            <HeaderReport/>
            <SectionReportList subcategory={subcategory} laporan={subCategory} />
          <Footer/>
        </>
  )
}

export default ReportList
