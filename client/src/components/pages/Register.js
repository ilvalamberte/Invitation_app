import React , { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/authContext/authContext.js'
import { Link } from 'react-router-dom'


const Register = (props) => {
    const { registerUser, userAuth, errors } = useContext(AuthContext);
    useEffect ( () => {
        if(userAuth) {
            props.history.push('/')
        }
    }, [userAuth, props.history])
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = user

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submit = e => {
        e.preventDefault()
        if (password !== password2) {
        console.log("not matching")
        } else {
        registerUser({name, email, password});
        console.log({name, email});
        console.log("works???")
        }
    }
    return (
        <div className="register">
            <h1>Sign Up</h1>
            <form onSubmit={submit}>
                <input type="text" name="name" placeholder="name" value={name} onChange={handleChange}></input>
                <input type="email" name="email" placeholder="email" value={email} onChange={handleChange}></input>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}></input>
                <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={handleChange}></input>
                <input type="submit" value="Sign Up" placeholder="name" className="btn"></input>

            </form>

            <div className="question">

            
           
                <p>Already have an account? {" "} <Link to='/login'> Login </Link></p>
            </div>
        </div>

    )
}

export default Register