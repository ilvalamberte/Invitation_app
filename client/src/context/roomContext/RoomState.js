import React, {useReducer} from 'react'
import RoomContext from './RoomContext.js'
import RoomReducer from './RoomReducer'
import {
    ADD_ROOM
} from '../types'

const RoomState = (props) => {
        const initialState = {
            // filterGuest : false,
       
            // editAble:null,
            rooms: [
                {
                    id: 1,
                    name: "Jake Smith",
                    phone: "333 444 357",
                },
                {
                    id: 2,
                    name: "Merry Williams",
                    phone: "222 777 2354",
                },
                {
                    id: 3,
                    name: "Azhaan Idrees",
                    phone: "988 346 5432",
                },
            ],
            errors:null
        }

        const [state, dispatch] = useReducer(RoomReducer, initialState)

        const addRoom = (room) =>{
            room.id = Date.now()
            dispatch({
                type: ADD_ROOM,
                payload: room
            })
        }
        return (
            <RoomContext.Provider
                value={{
                    rooms: state.rooms,
                    addRoom
                }}
            >{props.children}</RoomContext.Provider>  
        )
}


export default RoomState