import React, {useContext} from 'react'
import {FcTodoList} from 'react-icons/fc'
import {FcDisclaimer} from 'react-icons/fc'
import {GrFormClose} from 'react-icons/gr'
import { FcSearch } from 'react-icons/fc'
import {FcConferenceCall} from 'react-icons/fc'
import {FcDataSheet} from 'react-icons/fc'
import {FcCollaboration} from 'react-icons/fc'

import {Link} from 'react-router-dom'
import GuestContext from '../../context/guestContext/GuestContext.js'




const GuestCard = (props) => {
    const {toggleFilter} = useContext(GuestContext)
   
    return (
        
           <div class="card">
          <div class="additional">
       
            <div class="user-card">
            {props.mainIcon}
            </div>
            <div class="more-info">
              <h1>{props.name}</h1>
              <div class="stats">
                  <Link to='/GuestCounter'>
                <div>
                  <div class="title">{props.filter1}</div>
                  <div><FcConferenceCall className="iconSize"/></div>
                </div>
                </Link>
                <div>
                <Link to='/VeganGuest'>
                  <div class="title">{props.filter2}</div>
                  <div><FcDataSheet className="iconSize" onClick={()=> toggleFilter()}/></div>
                  </Link>
                </div>
                <div>
                  <div class="title">{props.filter3}</div>
                  <div><FcCollaboration className="iconSize"/></div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
  
    
    )
}

export default GuestCard