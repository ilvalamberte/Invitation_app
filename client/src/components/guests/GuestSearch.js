import React, {useContext, useRef} from 'react';
import { BsSearch } from 'react-icons/bs'
import GuestContext from '../../context/guestContext/GuestContext.js'

const GuestSearch = () => {
    const { searchGuest, clearSearch } = useContext(GuestContext)
    const searchValue = useRef('')
    const handleChange = e => {
        if (searchValue.current.value !== '') {
            searchGuest(e.target.value)
        } else {
            clearSearch();
        }
    }
    return (
/*         <div>
<input type="text" className="search" placeholder=" Search Guest by name" />
<BsSearch size='1.2rem' />

        </div> */

<div className="input-icons"> 
<BsSearch size='1.2rem' className="icon"/>

<input ref={searchValue} className="input-field" 
       type="text" 
       placeholder="Username" 
       onChange={handleChange}/> 

</div> 
    )
}

export default GuestSearch