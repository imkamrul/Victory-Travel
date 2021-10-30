
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Header from './Components/Header/Header';

import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';
import AddPackage from './Components/AddPackage/AddPackage';
import Booking from './Components/Booking/Booking';
import ManageAllBooking from './Components/ManageAllBooking/ManageAllBooking';
import MyBookings from './Components/MyBookings/MyBookings';
import Admins from './Components/Admins/Admins';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PageNOtFound from './Components/PageNotFound/PageNOtFound';


function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>

            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBooking">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/admins">
              <Admins></Admins>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <PageNOtFound></PageNOtFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
