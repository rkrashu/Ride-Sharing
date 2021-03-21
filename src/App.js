import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import TransportDetails from './TransportDetails/TransportDetails';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/transport/:name'>
            <TransportDetails></TransportDetails>
          </PrivateRoute>
          <PrivateRoute path='/transport/bike'>
          <TransportDetails></TransportDetails>
          </PrivateRoute>
          <Route path ='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
