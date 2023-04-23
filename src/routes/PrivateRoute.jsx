import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import routes from './routes.json';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('loggedIn');
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.USERSIGNIN} />;
};

export default PrivateRoute;
