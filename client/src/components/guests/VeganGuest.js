import React, {useContext, useEffect} from 'react'
import GuestContext from '../../context/guestContext/GuestContext.js'
import Guest from '../../components/guests/Guest.js'
import GuestCard from '../guests/GuestCard.js'
import {FcConferenceCall} from 'react-icons/fc'


const VeganGuest = () => {
   const {guests, getGuests} = useContext(GuestContext);

   useEffect(() => {
       getGuests()
   })


    const vegans = guests.filter(guest=> guest.dietary==="Vegan");



    return (
        <div className="app-container">
            <div className="main">
                <div className="filter">
                    <GuestCard mainIcon="" name="Advanced Options" filter1="Show Totals" filter2="Show Vegans" filter3="Messages" filter1icon={<FcConferenceCall />}/>
                </div>
            </div>
            <div className="guests">
                { vegans.map(guest => <Guest key={guest.id} guest={guest}/>)}
            </div>
            <p className="main">Total No of Vegan : {vegans.length}</p>
        </div>
    )

}
export default VeganGuest