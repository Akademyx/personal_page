import React from 'react';

export function ContactWrap(props){
    return(
        <div className='contact_wrapper'>
            <img src={props.img} alt={props.alt} />
            {props.children}
        </div>
    )

}

export default ContactWrap;