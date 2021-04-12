import React, {useContext, useState} from 'react'
import RoomContext from '../../context/roomContext/RoomContext'

export const RoomForm = () => {
    const { addRoom } = useContext(RoomContext)
    const [room, setRoom] = useState({
        name:'',
        phone:''
    })

    const {name, phone} = room

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
            phone:''
        })
    }
    return (
        <div class="main">
        {/* <h1>{editAble !== null ? 'Edit Guest' : 'Add Guest'}</h1> */}
            <form onSubmit={onsubmit} class="main">
                <h1>Add a Room</h1>
                <input type="text" placeholder="Room Name" name="name" value={name} onChange={handleChange}/>
                <input type="text" placeholder="Date" name="phone" value={phone}  onChange={handleChange}/>
                {/* <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/> */}
                <input type="submit" value="Submit" class="btn" />
            </form>
        </div>
    )
}
