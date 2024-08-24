import React, { Component } from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const isAuthenticated = auth.isAuthenticated(); //check to see if user is authenticated

    return isAuthenticated ? (children) : (<Navigate to="/signin" state={{from: location}}/>)
}

export default PrivateRoute
