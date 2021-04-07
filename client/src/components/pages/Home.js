import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext/authContext.js'

import GuestForm from '../guests/GuestForm.js'
import GuestCounter from '../guests/GuestCounter.js'
import GuestFilter from '../guests/GuestFilter.js'

import Guests from '../guests/Guests.js'

const Home = () => {

    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                <GuestFilter />
               
                </div>
                <GuestForm />
           
            </div>
            <Guests />
        </div>
    )
}
export default Home