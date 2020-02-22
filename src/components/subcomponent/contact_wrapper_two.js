import React from 'react';
import './contacts.css'

export const ContactWrapTwo = ({ info }) => {
    return (
        <div className='contact_wrapper'>
            <div className='item'>
                <img src={info.img} alt={info.alt} />
            </div>
            <div className='item' >
                <h1>
                    <a href={info.value} >{info.description}</a>
                </h1>
            </div>
        </div>

    )
}
