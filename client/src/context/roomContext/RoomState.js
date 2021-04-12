import React, {useReducer} from 'react'
import RoomContext from './RoomContext.js'
import RoomReducer from './RoomReducer'

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

        const addRoom = (rooms) =>{
            rooms.id = Date.now()
            dispatch({
                // type: ADD_ROOM,
                payload: rooms
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