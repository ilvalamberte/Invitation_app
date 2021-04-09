import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext/authContext.js'

import GuestForm from '../guests/GuestForm.js'
import GuestCounter from '../guests/GuestCounter.js'
import GuestFilter from '../guests/GuestFilter.js'
import GuestCard from '../guests/GuestCard.js'

import Guests from '../guests/Guests.js'
import {FcConferenceCall} from 'react-icons/fc'

const Home = () => {

    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
      
                <GuestCard mainIcon="" name="Advanced Options" filter1="Show Totals" filter2="Show Vegans" filter3="Book a room" filter1icon={<FcConferenceCall />}/>
               
                </div>
                <GuestForm />
           
            </div>
            <Guests />
        </div>
    )
}
export default Home