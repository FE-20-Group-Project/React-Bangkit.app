import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY_INFORMATION } from '../../../env/env';
import Navigation from '../../../components/Navigation';
import SectionDetailJobs from '../../../components/SectionDetailJobs';

function DetailJobs() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailJobs, setDetailJobs ] = useState([]);
    const [ jobs, setJobs ] = useState([]);
    const { id } = useParams();
    useEffect( () => {
        getApiJobs(`${API_KEY_INFORMATION}/${id}`).then( data => {
            setDetailJobs(data);
        } )
        getApiJobs( API_KEY_INFORMATION ).then( data => {
            setJobs(data);
        } )
    }, [] );

    const getApiJobs = async (api) => {
        const response = await axios.get(api);
        const result = response.data;
        return result;
    }


  return (
    <>
        <Navigation/>
        <SectionDetailJobs jobs={jobs} detailJobs={detailJobs} />
      
    </>
  )
}

export default DetailJobs
