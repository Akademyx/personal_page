import React from 'react';
import './contacts.css'

    export const ContactWrap=({info}) => {
    return(
        <div className='contact_wrapper'>
            <div className='item'>
                <img src={info.img} alt={info.alt} />
            </div>
            <div className='item' >
                <h1>{info.description}</h1> <br />
                <h1>{info.value}</h1>
            </div>
        </div>
    )

}
