import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Feedback from '../pages/Feedback';
import Help from '../pages/Help';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import routes from './routes.json';

const PageRoutes = () => {
  return (
    <>
    <Routes>
      <Route path={routes.USERHOME} element={<PrivateRoute />}>
        <Route path={routes.USERHOME} element={<Home />} />
        <Route path={routes.HELP} element={<Help />} />
      </Route>
      
      <Route path={routes.USERSIGNIN} element={<SignIn />} />
      <Route path={routes.USERSIGNUP} element={<SignUp />} />
      <Route path={routes.USERFEEDBACK} element={<Feedback />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
};

export default PageRoutes;
