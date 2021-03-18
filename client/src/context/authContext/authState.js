import React, { useReducer } from 'react'
import AuthContext from './authContext.js'
import AuthReducer from './authReducer.js'
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN

} from '../types.js'
import axios from 'axios'

const AuthState = (props) => {
    const initialState = {
        userAuth: null,
        errors: null,
    }
    const [state, dispatch ] = useReducer(AuthReducer, initialState)

    //register user 

    const registerUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/register', userData, config)
        dispatch ({

            type: SUCCESS_REGISTER,
            payload: res.data
        })
        } catch (err) {
            dispatch ({

                type: FAIL_REGISTER,
                payload: err.response.data

            })
        }
    }
    //login user 

    const loginUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/auth', userData, config)
        dispatch ({
            type: SUCCESS_LOGIN,
            payload: res.data

        })
        } catch (err) {
            dispatch ({

                type: FAIL_LOGIN,
                payload: err.response.data

            })

        }
    }
    return (
  <AuthContext.Provider value={{userAuth: state.userAuth,
                                errors:state.errors,
                                registerUser,
                                loginUser
                                }}>
                                {props.children}
  </AuthContext.Provider>
    )
}
export default AuthState