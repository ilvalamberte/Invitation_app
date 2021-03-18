import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'
import GuestForm from './components/guests/GuestForm.js'
import GuestState from './context/guestContext/GuestState.js'
import AuthState from './context/authContext/authState.js'
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js'


function App() {
  return (
    <AuthState>
    <GuestState>
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route exact path= '/register' component={Register}/>
        <Route exact path= '/login' component={Login}/>
      </Switch>
    </div> 
    </Router>
    </GuestState>
    </AuthState>
  );
}

export default App;
