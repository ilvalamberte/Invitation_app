import React, { useContext, useState, useEffect } from 'react'
import GuestContext from '../../context/guestContext/GuestContext.js'

const GuestForm = () => {
    const {addGuest} = useContext(GuestContext)
    const [guest, setGuest] = useState({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
    })

    const { name, phone, dietary } = guest

    const handleChange = e => {
        setGuest ({
            ...guest,
            [e.target.name] : e.target.value
        })
    }

    const onsubmit = e => {
        e.preventDefault();
        addGuest(guest)
        setGuest({
            name: '',
            phone: '',
            dietary: 'Non-Veg'
        })
    }
  return (
    <div className="invite-section">
      <h1>Invite someone</h1>
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
          <input type="radio" name="diet" value="Pescatarian" checked={dietary === 'Pascatarian'}/>
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="" className="btn" />
        
      </form>

    </div>
  )
}

export default GuestForm