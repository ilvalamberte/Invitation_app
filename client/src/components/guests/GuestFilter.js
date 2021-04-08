import React, {useContext} from 'react';
import GuestContext from '../../context/guestContext/GuestContext.js'
import { Link } from 'react-router-dom'

const GuestFilter = () => {
    const {toggleFilter} = useContext(GuestContext)

    return (
        <div className="container-buttons">
       
        <div className="toggle btn">
            <label className="switch">
                <input type="checkbox" onChange={() => toggleFilter()}></input>
                    <span className="slider round"></span>
            </label>
           <Link to='/GuestCounter'><p className="">Show Attending Only</p> </Link> 
        </div>
        <p className="btn">Book a room</p>
        <Link to='/GuestCounter'><p className="btn">Show Total Stats</p> </Link> 
        </div>
    )

}

export default GuestFilter