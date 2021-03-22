import React, { useReducer } from 'react'
import axios from 'axios'
import cors from 'cors'
import AuthContext from '../authContext/authContext.js'
import AuthReducer from './authReducer.js'
import setToken from '../../utils/setToken.js'
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN,
    LOG_OUT,
    SET_USER,
    AUTH_ERROR
} from '../types.js'

const AuthState = (props) => {

    const initialState = {
        userAuth:null,
        errors:null,
        user: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    //get user

    const getUser = async () => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get('http://localhost:8000/auth')
            dispatch (
                {
                    type: SET_USER,
                    payload: res.data
                }
            )

        } catch (err) {
            dispatch ( 
                {
                    type: AUTH_ERROR,
                    payload: err
                }
            )

        }
    }

    //register user

    const registerUser = async userData => {
        const config = {
            header : {
                'Application-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:8000/register', userData, config, {mode:cors})
            dispatch({
                type: SUCCESS_REGISTER,
                payload: res.data
            })

        } catch (err) {
            dispatch ({
                type: FAIL_REGISTER,
                /* payload:res.data */
            })
        }
    }

        //login user

        const loginUser = async userData => {
            const config = {
                header : {
                    'Application-Type':'application/json'
                }
            }
            try {
                const res = await axios.post('http://localhost:8000/auth', userData, config)
                dispatch({
                    type: SUCCESS_LOGIN,
                    payload: res.data
                })
    
            } catch (err) {
                dispatch ({
                    type: FAIL_LOGIN,
                    payload:err.response.data
                })
            }
        }

        //logout user 

        const logout = () => {
            dispatch(
                {
                    type: LOG_OUT,
        
                }
            )
        }



    return (
        <AuthContext.Provider value={{
            user: state.user,
            userAuth: state.userAuth,
            errors:state.errors,
            getUser: getUser,
            registerUser,
            loginUser,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState