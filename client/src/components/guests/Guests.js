import React, {useContext, useEffect} from 'react'
import GuestContext from '../../context/guestContext/GuestContext.js'

import Guest from '../guests/Guest.js'


const Guests = () => {
    const {guests, filterGuest, getGuests } = useContext(GuestContext)

    useEffect(() => {
        getGuests()
    })    

    return (
        <div className="guests">
            {guests.map(guest => <Guest key={guest.id} guest={guest} />) ?
            guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => <Guest key={guest.id} guest={guest}/>) : null}
        </div>
    )
}


export default Guests