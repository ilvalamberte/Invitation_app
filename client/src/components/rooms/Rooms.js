import React, {useContext, useEffect} from 'react'
import { Room }  from './Room'
import RoomContext from '../../context/roomContext/RoomContext.js'

export const Rooms = () => {
    const { rooms, getRooms } = useContext(RoomContext)
    const roomLentgth = rooms.length

    useEffect(() => {
        getRooms()
    })
    return (
        <div className="guests">
                {rooms.map(room => <Room key={room.id} room={room} />)}
                {/* <Room /> */}
            <h2>Total No. of Message: {roomLentgth}</h2>
        </div>
    )
}
