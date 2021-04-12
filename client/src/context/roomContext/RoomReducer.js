import {
    ADD_ROOM
} from '../types.js'

export default (state, {type, payload}) => {
    switch(type) {
        case ADD_ROOM:
            return {
                ...state,
                rooms:[...state.rooms, payload]
            }
        default:
            return state
    }

}