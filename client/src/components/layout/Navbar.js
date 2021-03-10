import React from 'react'
import { GrLogout } from 'react-icons/gr'

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="logo">
            <h1><i className='as fa-glass-cheers' />
            RSVP APP
            </h1>
            <p>Made by</p>
        </div>
        <ul>
            <li>Hello</li>
            <span className="sm-hide">|</span>
            <li>
                <a href="#!">
                    <span className="sm-hide">Logout</span>
                  
                </a>
                <GrLogout color="white"/>
            </li>
        </ul>
        </div>
    )
}

export default Navbar