import React from 'react';
import './contacts.css';
import {ContactWrap} from './contact_wrapper.js'
import Phone from '../static/Mobile-Smartphone-icon.png'
import Email from '../static/email_icon.png'
import LinkedIn from '../static/linkedin.png'
import Github from '../static/github.png'
import { render } from '@testing-library/react';

export function Contact(props) {
    const fallbackUrl = 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif';
    return(
        <div
            className="contacts"
        >
        <ContactWrap 
            src={Phone}
            alt={fallbackUrl}
        >
            <h2>Phone Number: </h2>
            <p>(661)755-3028</p>
        </ContactWrap>
        {/* <ContactWrapper ></ContactWrapper>
        <ContactWrapper ></ContactWrapper> */}
        </div>
        )
}

// export function Contact() {
//     console.log("Contact works and is hooked")
//     return(
//         <h1>This is a test</h1>
//     )
// }