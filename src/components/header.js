import React from 'react';
import './header.css';

import { RadioButton } from './radio_button.js'
import home from './static/home.png';
import folder from './static/folder-flat.png';
import email from './static/email_icon.png';
import {Contact} from './subcomponent/contacts.js'
import {Project} from './subcomponent/projects.js'
import {AboutPage} from './subcomponent/about.js'


var ReactRotatingText = require('react-rotating-text');

export class Heading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            class: "about",
            message: ["Stuff", "Rude", "TV"],
            background: ['green', 'yellow', 'red', 'blue'],
            displayed: <AboutPage />
        }

        this.radioChangeHandler = this.radioChangeHandler.bind(this)
    }

    radioChangeHandler(e) {
        if(e.target.value === 'about'){
            this.setState({class: e.target.value, displayed: <AboutPage/>})
        } else if(e.target.value === 'projects') {
            this.setState({class:e.target.value, displayed: <Project />})
        } else if(e.target.value === 'contact') {
            this.setState({class:e.target.value, displayed: <Contact />})
        }
    }

    render() {
        let getNumber = Math.floor(Math.random() * (3 - 0) + 0);
        let getBackGround = this.state.background[getNumber];
           return (
            <div
                className="wrapper"
                >
                <div
                    className={getBackGround}
                >
                    <div
                        className="nameFrame"
                    >
                        <h1>
                           
                            <ReactRotatingText
                                className=".react-rotating-text-cursor"
                                items={['Alex Tran','Front End', 'Back End', 'Full Stack', 'Software Developer']}
                                pause="1000"
                                />
                        </h1>
                    </div>
                </div>
                <div
                    className='navBar'
                >
                    <form>
                        <RadioButton 
                            name="about"
                            value="about"
                            changed={ this.radioChangeHandler}
                            isSelected={this.state.class === "about"}
                            img={home}
                            //    img='./static/home.png'
                            alt="home.png"
                        />
                        <RadioButton 
                            name="projects"
                            value="projects"
                            changed={this.radioChangeHandler}
                            isSelected={this.state.class === "projects"}
                            img={folder}
                            alt="folder.png"
                        />
                        <RadioButton 
                            name="contact"
                            value="contact"
                            changed={this.radioChangeHandler}
                            isSelected={this.state.class === "contact"}
                            img={email}
                            alt="email.png"
                        />
                    </form>
                </div>
                    {this.state.displayed}
            </div>
        )
    }

}

