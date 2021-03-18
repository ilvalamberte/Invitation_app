import React , { useState, useContext } from 'react'
import AuthContext from '../../context/authContext/authContext.js'
import { Link } from 'react-router-dom'
const Login = () => {
    const { loginUser, userAuth, errors } = useContext(AuthContext)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {email, password} = user

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submit = e => {
        e.preventDefault()
        loginUser({email, password})
    }
    return (
         <div>
             <div className="login">
                 <h1>Sign In</h1>
                 <form onSubmit={submit}>
                     <input type="email" name="email" placeholder="email" value={email} onChange={handleChange}></input>
                     <input type="password" name="password" placeholder="password" value={password} onChange={handleChange}></input>
                     <input type="submit" value="Sign In" className="btn"></input>
                 </form>
                 <div className="question">
             
                     <p>Don't have an account? {" "} <Link to="/register"></Link></p>
                 </div>
             </div>
         </div>
    )
}

export default Login