
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/">
              <Home></Home>

            </Route>


          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
