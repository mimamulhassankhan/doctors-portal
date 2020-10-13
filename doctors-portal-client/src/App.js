import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import LoginForm from './Components/LoginForm/LoginForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/HomePage/Home/Home';
import Appointments from './Components/Apponitments/Appointments/Appointments';
import DashboardNav from './Components/AdminPortal/DashboardNav/DashboardNav';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/apponitments">
            <Appointments />
          </Route>
          <PrivateRoute path="/admin">
            <DashboardNav />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
