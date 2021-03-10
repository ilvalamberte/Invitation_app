import React from 'react';

import GuestForm from '../guests/GuestForm.js'
import GuestCounter from '../guests/GuestCounter.js'
import GuestFilter from '../guests/GuestFilter.js'
import GuestSearch from '../guests/GuestSearch.js'
import Guests from '../guests/Guests.js'

const Home = () => {
    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                <GuestFilter />
                <GuestSearch />
                </div>
                <GuestForm />
                <GuestCounter />
            </div>
            <Guests />
        </div>
    )
}
export default Home