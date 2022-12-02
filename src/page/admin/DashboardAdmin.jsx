import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Chart from '../../components/chart/Chart'
import { Link } from 'react-router-dom'
import HeaderInfoDashboard from '../../components/header/HeaderInfoDashboard'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import { getCookie } from '../../cookie/cookie'
import { API_KEY_USERS, API_KEY_INSTANSI, API_KEY_REPORT } from '../../env/env'
import { FaBuilding, FaUserAlt, FaBullhorn } from 'react-icons/fa'
import axios from 'axios'
import Loading from '../../components/loader/Loading'

const favIcon = {
  FaBuilding,
  FaUserAlt,
  FaBullhorn
};

function DashboardAdmin() {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ users, setUsers ] = useState();
  const [ instansi, setInstansi ] = useState();
  const [ laporan, setLaporan ] = useState();

  useEffect( () => {
      getAPI(API_KEY_USERS).then( data => setUsers(data.length) );
      getAPI(API_KEY_INSTANSI).then( data => setInstansi(data.length));
      getAPI(API_KEY_REPORT,).then( data => {
        setLaporan(data.length)
        setIsLoading(false);
      } )
  },[] );

  const getAPI = async (api) => {
      const token = getCookie('token');
      const response = await axios.get(api, {
          'headers': {
              authorization: `Bearer ${token}`
          }
      });
      const result = response.data.data;
      return result;
  }

  return (
    <>
      { isLoading ? (
        <Loading/>
      ) : (
        <Container fluid>
            <Row>
              <section className='col-10 p-0'>
                  <DashboardTopBar/>
                  <HeaderInfoDashboard favIcon={favIcon} users={users} instansi={instansi} laporan={laporan} />
                        <main className='bg-soft-light p-3'>
                          <Chart/>
                        </main>
              </section>
            </Row>
        </Container>
      ) }
    </>
  )
}

export default DashboardAdmin
