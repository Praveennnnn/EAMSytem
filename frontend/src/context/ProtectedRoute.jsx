import React, { useContext } from 'react'
import { UserContext } from './ContextProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children,roles})=> {
    const {role,authenticated} =useContext(UserContext);

    if(!authenticated){
        return <Navigate to='/'/>
    }

    if(!roles.includes(role)){
        return <Navigate to='/error'/>
    }

    return children
  
}

export default ProtectedRoute