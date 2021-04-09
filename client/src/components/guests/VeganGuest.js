import React, {useContext, useEffect} from 'react'
import GuestContext from '../../context/guestContext/GuestContext.js'
import Guest from '../../components/guests/Guest.js'


const VeganGuest = () => {
   const {guests, getGuests} = useContext(GuestContext);

   useEffect(() => {
       getGuests()
   })


    const vegans = guests.filter(guest=> guest.dietary==="Vegan");



    return (

<h1>{guests.filter(guest => guest.dietary === "Vegan").map(guest => <Guest key={guest.id} guest={guest}/>)}</h1>

    )

}
export default VeganGuest