import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'
import GuestForm from './components/guests/GuestForm.js'
import GuestState from './context/guestContext/GuestState.js'

function App() {
  return (
    <GuestState>
    <div>
    <Navbar />
     <Home />

   
    </div> 
    </GuestState>
  );
}

export default App;
