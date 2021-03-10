import React from 'react'

import { GrUserExpert } from 'react-icons/gr'
import { BsCheckBox } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { FcCellPhone } from 'react-icons/fc'


const Guest = ({guest}) => {
    const { name, phone, dietary, isconfirmed } = guest


    return (
        <div className="guest-card">
            <div className="card-head">
                <div>
                    <label className={`${isconfirmed && 'confirm'}`}>{isconfirmed}
                        <BsCheckBox />
                        <input type="checkbox"></input>
                    </label>
                </div>

                  <div>
            <button className="btn1">
            <GrUserExpert />
            </button>

            <button className="btn1">
            <BsTrash />
            </button>

            </div>
            </div>

          
          

            <div className="card-body">

                <h2>{name}</h2>
                <span className={'badge ' + (dietary === 'Non-Veg' ? 'red' : dietary === 'Vegan' ? 'green' : 'seaGreen')}>{dietary}</span>
                <div className="contact">
                    <FcCellPhone />
                    <p>{phone}</p>

                </div>
            </div>

        </div>


    )
}

export default Guest