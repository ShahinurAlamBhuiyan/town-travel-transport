import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
 export const UserContext = createContext();


function App() {
  const [ loggedUser, setLoggedUser ] = useState({})
  return (
    <UserContext.Provider value={[ loggedUser, setLoggedUser ]}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <PrivateRoute path='/destination/:transport'>
            <Destination />
          </PrivateRoute>
          <PrivateRoute path='/destination/CAR'>
            <Destination />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <h2>page not found, 404 error found!!!</h2>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
