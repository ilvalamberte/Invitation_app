import React, {useContext} from 'react';
import GuestContext from '../../context/guestContext/GuestContext.js'

const GuestFilter = () => {
    const {toggleFilter} = useContext(GuestContext)

    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" onChange={() => toggleFilter()}></input>
                    <span className="slider round"></span>
            </label>
            <p className="lead">Show Attending Only</p>

        </div>
    )

}

export default GuestFilter