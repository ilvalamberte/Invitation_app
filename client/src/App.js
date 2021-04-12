import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'
import GuestCounter from './components/guests/GuestCounter'
import GuestForm from './components/guests/GuestForm.js'
import GuestState from './context/guestContext/GuestState.js'
import AuthState from './context/authContext/authState.js'
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js'
import setToken from '../src/utils/setToken.js'
import VeganGuest from '../src/components/guests/VeganGuest.js'
import { House } from './components/pages/House';
import RoomState from './context/roomContext/RoomState.js'


if (localStorage.token) {
  setToken(localStorage.token)
} else {

}


function App() {
  return (
    <AuthState>
    <GuestState>
    <RoomState>
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path= '/' component={Home}/>
        <Route exact path= '/register' component={Register}/>
        <Route exact path= '/login' component={Login}/>
        <Route exact path= '/GuestCounter' component={GuestCounter}/>
        <Route exact path= '/VeganGuest' component={VeganGuest}/>
        <Route exact path= "/House" component={House} />
      </Switch>
    </div> 
    </Router>
    </RoomState>
    </GuestState>
    </AuthState>
  );
}

export default App;
