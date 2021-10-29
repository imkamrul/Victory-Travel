
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
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/myBookings">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/allBooking">
              <ManageAllBooking></ManageAllBooking>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>
            <Route path="/admins">
              <Admins></Admins>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
