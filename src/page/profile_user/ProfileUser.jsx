import React, { useState, useEffect } from 'react'
import Loading from '../../components/loader/Loading';
import { useSelector } from 'react-redux';
import UserProfile from '../../components/profile/UserProfile';

function ProfileUser() {
    const {session} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
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
                <UserProfile profile={session} />
            </>
        ) }
    </>
  )
}

export default ProfileUser
