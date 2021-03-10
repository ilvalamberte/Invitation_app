import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH
} from '../types.js'

export default (state, {type, payload}) => {
    switch(type) {
        case SEARCH_GUEST:
            const reg = new RegExp(`${payload}`, 'gi')
            return {
                ...state,
                search:state.guests.filter(guest=>guest.name.match())
            }
            case CLEAR_SEARCH:
                return {
                    ...state,
                    search:null

                }
        case TOGGLE_FILTER:
            return{
                ...state,
                filterGuest: !state.filterGuest
            }
        default:
            return state
    }

}