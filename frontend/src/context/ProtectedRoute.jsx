import React, { useContext } from 'react'
import { UserContext } from './ContextProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
    const context = useContext(UserContext);
    const { role, authenticated } = context;
    if (!authenticated) {
        return <Navigate to='/' />
    }
    if (!roles.includes(role)) {
        return <Navigate to='/error' />
    }

    return children

}

export default ProtectedRoute

