import React from 'react';
import './contacts.css';
import {ContactWrap} from './contact_wrapper.js'
import {ContactWrapTwo} from './contact_wrapper_two.js'


export function Contact() {
    const link = '../static/'
    const pItems = {
        // img: link+'Mobile-Smartphone-icon.png',
        img: link+"Mobile-Smartphone-icon.png",
        alt: 'broken',
        description: 'Phone Number: ',
        value: '(661)755-3028'
    }
    const lItems ={
        img: link+ 'linkedin.png',
        alt: 'broken',
        description: 'LinkedIn',
        value: 'https://www.linkedin.com/in/lxtran8501/'
    }
    const github ={
        img: link+ 'github.png',
        alt: 'damit',
        description: 'GitHub',
        value: 'https://github.com/Akademyx'
    }
    const eM = {
        img: link+'email_icon.png',
        alt: 'damit',
        description:'Email',
        value: 'www.LxDemikz@gmail.com'
    }
    return(
        <div
            className="contacts"
        >
            <ContactWrap info={pItems} />
            <ContactWrap
            info={eM} />
            <ContactWrapTwo info={lItems} />
            <ContactWrapTwo info={github} />
        </div>
        )
}
