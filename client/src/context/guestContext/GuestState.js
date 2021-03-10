import React, { useReducer } from 'react'
import GuestContext from './GuestContext.js'
import GuestReducer from './GuestReducer.js'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH
} from '../types.js'

const GuestState = (props) => {
    const initialState = {
        filterGuest : false,
        search: null,
        guests: [
            {
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
            },

        ]
    }
    const [state, dispatch] = useReducer(GuestReducer, initialState)

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
 
    toggleFilter,
    
    clearSearch
}}>{props.children}</GuestContext.Provider>  
)
}

export default GuestState