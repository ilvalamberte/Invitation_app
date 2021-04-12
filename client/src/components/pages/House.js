import React from 'react'
import GuestCard from '../guests/GuestCard'
import {FcConferenceCall} from 'react-icons/fc'
import { Room } from '../rooms/Room'
import { RoomForm } from '../rooms/RoomForm'
import { Rooms } from '../rooms/Rooms'

export const House = () => {
    return (
        <div className="app-container">
            <div class="main">
                <div className="filter">
                    <GuestCard mainIcon="" name="Advanced Options" filter1="Show Totals" filter2="Show Vegans" filter3="Rooms" filter1icon={<FcConferenceCall />}/>
                </div>
                    <RoomForm />
                <div>
            </div>
            </div>
                <Rooms />
        </div>
    )
}
