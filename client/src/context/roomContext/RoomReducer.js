import {
    ADD_ROOM, REMOVE_ROOM
} from '../types.js'

export default (state, {type, payload}) => {
    switch(type) {
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