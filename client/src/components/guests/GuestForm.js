import React, { useContext, useState, useEffect } from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs'
import GuestContext from '../../context/guestContext/GuestContext.js'

const GuestForm = () => {
    const {addGuest, editAble, updateGuest, clearEdit} = useContext(GuestContext);
    useEffect( () => {
        if(editAble !== null) {
    setGuest(editAble)
        } else {
            setGuest (
                {
                    name: '',
                    phone: '',
                    dietary: 'Non-Veg'

                }
            )

        }
    } , [editAble])
    const [guest, setGuest] = useState({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
    })

    if(editAble !== null ) {
    console.log(editAble)
    }

    const { name, phone, dietary } = guest

    const handleChange = e => {
        setGuest ({
            ...guest,
            [e.target.name] : e.target.value
        })
    }

    const onsubmit = e => {
        e.preventDefault();
        if(editAble !== null) {
            updateGuest(guest)
            clearEdit()
        } else {
        addGuest(guest)
        setGuest({
            name: '',
            phone: '',
            dietary: 'Non-Veg'
        })
    }
}
  return (
    <div className="invite-section">
      <h1>{editAble !== null ? 'Edit Guest' : 'Invite Someone' }</h1>
      <form onSubmit={onsubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/>
        <p className="options-label">
          Dietary</p>
        <div className="options">
          <label class="container">Non-Veg
          <input type="radio" name="diet" value="Non-Veg" checked={dietary === 'Non-Veg'}/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Vegan
          <input type="radio" name="diet" value="Vegan" checked={dietary === 'Vegan'}/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Pescatarian
          <input type="radio" name="diet" value="Pascatarian" checked={dietary === 'Pascatarian'}/>
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editAble === null ? 'Update' : 'Add'} className="btn" />
        {editAble !== null ? <input onClick={clearEdit} type="button" className="btn clear"/> : null}
        
      </form>

    </div>
  )
}

export default GuestForm