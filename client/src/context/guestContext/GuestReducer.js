import {
    TOGGLE_FILTER,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUESTS
} from '../types.js'

export default (state, {type, payload}) => {
    switch(type) {

        case GET_GUESTS:
            return {
                ...state,
                guests: payload
            }
        case ADD_GUEST:
            return {
                ...state,
                guests:[...state.guests, payload]
            }

        case REMOVE_GUEST:
            return {
                ...state,
                guests: state.guests.filter(guest => guest._id !== payload)

            }
        case UPDATE_GUEST:
            return {
                ...state,
                guests:state.guests.map(guest => guest._id === payload._id ? payload : guest)
            }

        case EDIT_GUEST: 
        return {
            ...state,
            editAble:payload
        }

        case CLEAR_EDIT: 
        return {
            ...state,
            editAble: null
        }
       
  
        case TOGGLE_FILTER:
            return{
                ...state,
                guests: state.guests.filter(guest => guest.dietary === "Vegan")
            }
        default:
            return state
    }

}