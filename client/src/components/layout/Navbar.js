import React , { useContext, Fragment } from 'react'
import AuthContext from '../../context/authContext/authContext.js'
import { Link } from 'react-router-dom'

import { GrLogout } from 'react-icons/gr'

const Navbar = () => {
    const {logout, userAuth, user} = useContext(AuthContext)

    const onLogout = () => {
        logout();
    }

    const userLinks = (
    <Fragment>
    <li>Hello {user && user.name}</li>
    <span className="sm-hide">|</span>
    <li>
    <Link to='/login'> <a onClick={onLogout} href="#!">
    <span className="sm-hide">Logout</span></a></Link> 
    <GrLogout color="white"/>
    </li>
    </Fragment>
    )
    const authLinks = (
    <Fragment>
    <li>
    <Link to='register'>Register</Link>
    </li>
    <li>
    <Link to='/login'> Log In</Link>
    </li>
    </Fragment>
    )


    return (
        <div className="navbar">
        <div className="logo">
            <h1><i className='as fa-glass-cheers' />
            <Link to="/">Invitation App</Link>
            </h1>
        </div>
        <ul>
        { userAuth ? userLinks : authLinks }
        </ul>
        </div>
    )
}

export default Navbar