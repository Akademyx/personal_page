import React from 'react';
import './contacts.css';
import {ContactWrap} from './contact_wrapper.js'
import {ContactWrapTwo} from './contact_wrapper_two.js'


export function Contact() {
    const link = '../static/'
    const pItems = {
        // img: link+'Mobile-Smartphone-icon.png',
        // img: {pIcon},
        description: 'Phone Number: ',
        value: '(661)755-3028'
    }
    const lItems ={
        description: 'LinkedIn',
        value: 'https://www.linkedin.com/in/lxtran8501/'
    }
    const github ={
        description: 'GitHub',
        value: 'https://github.com/Akademyx'
    }
    const eM = {
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
