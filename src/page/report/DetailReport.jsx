import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loader/Loading';
import Navigation from '../../components/navigation/Navigation';
import { API_KEY_REPORT } from '../../env/env';
import SectionDetailReport from './SectionDetailReport';
import SectionDetailRepsection from './SectionDetailReport';

function DetailReport() {
    const {id} = useParams();
    const [detailLaporan, setDetailLaporan] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
            window.scrollTo(0, 0);
            getAPi(API_KEY_REPORT + '/' + id).then( data => {
                    setDetailLaporan(data);
                    setIsLoading(false);
                } )
            }, [isLoading])
            
    const getAPi = async (api) => {
        const res = await axios.get(api);
        const result = res.data.data;
        return result;
    }


  return (
    <>
                { isLoading ? (
                    <Loading/>
                ) : (
                    <>
                    <Navigation/>
                        <SectionDetailReport id={id} detailLaporan={detailLaporan} setIsLoading={setIsLoading} />
                    <Footer/>
                    </>
                ) }
    </>
  )
}

export default DetailReport
