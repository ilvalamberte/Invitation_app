import {
    ADD_ROOM,
    GET_ROOMS,
    REMOVE_ROOM
} from '../types.js'

export default (state, {type, payload}) => {
    switch(type) {
        case GET_ROOMS:
            return {
                ...state,
                rooms: payload
            }
        case ADD_ROOM:
            return {
                ...state,
                rooms:[...state.rooms, payload]
            }
        case REMOVE_ROOM:
            return {
                ...state,
                rooms: state.rooms.filter(room => room.id !== payload)

            }
        default:
            return state
    }

}