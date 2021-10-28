
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Header from './Components/Header/Header';
import EventsAdd from './Components/EventsAdd/EventsAdd';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';

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
            <Route path="/eventsAdd">
              <EventsAdd></EventsAdd>
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
