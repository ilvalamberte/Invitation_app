import React, {useState} from 'react'

export const RoomForm = () => {
    const [room, setRoom] = useState({
        name:'',
        phone:''
    })

    const {name, phone} = room
    return (
        <div class="main">
        {/* <h1>{editAble !== null ? 'Edit Guest' : 'Add Guest'}</h1> */}
            <form onSubmit={onsubmit} class="main">
                <h1>Add a Room</h1>
                <input type="text" placeholder="Room Name" name="name" value={name}/>
                <input type="text" placeholder="Date" name="phone" value={phone}/>
                {/* <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/> */}
                <input type="submit" value="Submit" class="btn" />
            </form>
        </div>
    )
}
