import React, {useContext, useState} from 'react'
import RoomContext from '../../context/roomContext/RoomContext'

export const RoomForm = () => {
    const { addRoom } = useContext(RoomContext)
    const [room, setRoom] = useState({
        name:'',
        type:'Public'
    })

    const {name, type} = room

    const handleChange = e => {
        setRoom({
            ...room,
            [e.target.name]: e.target.value
        })
    }
    const onsubmit = e =>{
        e.preventDefault()
        addRoom(room)
        console.log(room)
        setRoom({
            name:'',
            type:'Public'
        })
    }
    return (
        <div class="invitation-app">
        {/* <h1>{editAble !== null ? 'Edit Guest' : 'Add Guest'}</h1> */}
            <form onSubmit={onsubmit}>
                <h1>Add a Message</h1>
                <input type="text" placeholder="Type your message" name="name" value={name} onChange={handleChange}/>
                <p className="options-label">
                Message Type</p>
                <div className="options">
                <label class="container">Public
                <input type="radio" name="type" value="Public" checked={type==="Public"} onChange={handleChange}/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Private
                <input type="radio" name="type" value="Private" checked={type==="Private"} onChange={handleChange}/>
                    <span class="checkmark"></span>
                </label>
            
                </div>
                {/* <input type="text" placeholder="type" name="type" value={type} onChange={handleChange}/> */}
                <input type="submit" value="Submit" class="btn" />
            </form>
        </div>
    )
}
