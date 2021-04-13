import React, {useReducer} from 'react'
import RoomContext from './RoomContext.js'
import RoomReducer from './RoomReducer'
import {
    ADD_ROOM,
    REMOVE_ROOM
} from '../types'

const RoomState = (props) => {
        const initialState = {
            // filterGuest : false,
       
            // editAble:null,
            rooms: [
                {
                    id: 1,
                    name: "Jake Smith",
                    type: "Public",
                },
                {
                    id: 2,
                    name: "Merry Williams",
                    type: "Public",
                },
                {
                    id: 3,
                    name: "Azhaan Idrees",
                    type: "Private",
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

        const removeRoom = async (id) => {
            // try {
            // await axios.delete(`http://localhost:5000/guests/${id}`)
            // } catch (err) {
    
            //  }
            dispatch({
                type: REMOVE_ROOM,
                payload: id
            })
        }

        return (
            <RoomContext.Provider
                value={{
                    rooms: state.rooms,
                    addRoom,
                    removeRoom
                }}
            >{props.children}</RoomContext.Provider>  
        )
}


export default RoomState