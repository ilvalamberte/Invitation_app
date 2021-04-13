import React, {useContext, useEffect} from 'react';
import GuestContext from '../../context/guestContext/GuestContext.js'

const GuestCounter = () => {

  const {guests, getGuests} = useContext(GuestContext)

  const totalInvited = guests.length
  const allGuests = guests
  const attending = guests.filter(guest => guest.isconfirmed)
  const totalAttending = attending.length
  const invitedByDiet = (type) => guests.filter(guest => guest.dietary === type).length
  const attendingByDiet = (type) => attending.filter(guest => guest.dietary === type).length


    return (
        <div className="main">
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
 

          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedByDiet('Non-Veg')}</td>
       
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedByDiet('Vegan')}</td>
         
          </tr><tr>
            <th>Pescetarians</th>
            <td>{invitedByDiet('Pascatarian')}</td>
          
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
          

          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default GuestCounter;