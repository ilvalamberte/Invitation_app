import React, { useReducer } from 'react'
import GuestContext from './GuestContext.js'
import GuestReducer from './GuestReducer.js'
import axios from 'axios'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUESTS
} from '../types.js'

const GuestState = (props) => {
    const initialState = {
        filterGuest : false,
        search: null,
        editAble:null,
        guests: [
      /*       {
                id: 1,
                name: "Jake Smith",
                phone: "333 444 357",
                dietary: "Vegan",
                isconfirmed: false
            },
            {
                id: 2,
                name: "Merry Williams",
                phone: "222 777 2354",
                dietary: "Non-Veg",
                isconfirmed: true
            },
            {
                id: 3,
                name: "Azhaan Idrees",
                phone: "988 346 5432",
                dietary: "Pascatarian",
                isconfirmed: true
            }, */

        ],
        errors:null
    }

    const [state, dispatch] = useReducer(GuestReducer, initialState)

    //get guests

    const getGuests = async () => {
        try {
            const res = await axios.get('http://localhost:5000/guests')
            dispatch ({
                type: GET_GUESTS,
                payload: res.data
            })
        } catch (err) {
         console.log(err)
        }
    }

//add guest
    const addGuest = async (guest) => {
             const config = {
            'Content-Type' : 'application/json'
        }

        try {
            const res = await axios.post('http://localhost:5000/guests', guest, config)
            guest.isconfirmed = false
            dispatch ({
                type: ADD_GUEST,
                payload: res.data
            })

        } catch (err) {
            console.log(err)

        }
        guest.isconfirmed = false;
        dispatch({
            type: ADD_GUEST,
            payload: guest
        }) 

    }
//remove guest
    const removeGuest = async (id) => {
        try {
        await axios.delete(`http://localhost:5000/guests/${id}`)
        } catch (err) {

         }
        dispatch({
            type: REMOVE_GUEST,
            payload: id
        })
    }
//update guest
    const updateGuest = async (id, guest) => {
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

    try {
        const res = await axios.put(`http://localhost:5000/guests/${id}`, guest, config)
        dispatch ({
            type: UPDATE_GUEST,
            payload: res.data
        })

    } catch (err) {
        console.log(err);

    }

        dispatch({
            type: UPDATE_GUEST,
            payload: guest
        }) 

    }

    const editGuest = (guest) => {
        dispatch ({
            type: EDIT_GUEST,
            payload: guest
        })

    }
    const clearEdit = (guest) => {
        dispatch ({
            type: CLEAR_EDIT,
            payload: ''
        })

    }

    const toggleFilter = () => {
        dispatch( {
            type: TOGGLE_FILTER
        })
    }

    const clearSearch =() => {
        dispatch({
            type:CLEAR_SEARCH

        })
    }
    console.log(state.filterGuest)
    return (
    <GuestContext.Provider
    value={{
    guests: state.guests,
    filterGuest:state.filterGuest,
    search: state.search,
    editAble: state.editAble,
    getGuests,
    addGuest,
    removeGuest,
    updateGuest,
    editGuest,
    clearEdit,
    toggleFilter,
    clearSearch
}}>{props.children}</GuestContext.Provider>  
)}

export default GuestState