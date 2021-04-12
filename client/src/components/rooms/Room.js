import React, {useContext} from 'react'
import RoomContext from '../../context/roomContext/RoomContext.js'

import { BsTrash } from 'react-icons/bs'

export const Room = ({room}) => {
    const { removeRoom } = useContext(RoomContext)
    const {id, name, phone} = room

    const handleRemove = () => {
        removeRoom(id)
    }

    return (
        <div class="main">
            <div className="guest-card">
                <div className="card-head">
                    <h2>{name}</h2>
                    <button className="btn1" onClick={handleRemove}>
                    <BsTrash />
                </button>
                </div>
                <div className="card-body">
                    <div className="contact">
                        <p>{phone}</p>
                        <p>{id}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
