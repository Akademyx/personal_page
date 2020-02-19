import React from 'react';
import './header.css';
import './about.css';
import './projects.css';
import './contact.css';
import { RadioButton } from './radio_button.js'
import home from './static/home.png';
import ruby from './static/RUBY.png';
import angular from './static/angular.png';

var ReactRotatingText = require('react-rotating-text');

export class Heading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            class: "about",
            message: ["Stuff", "Rude", "TV"]
        }

        this.radioChangeHandler = this.radioChangeHandler.bind(this)
    }

    radioChangeHandler(e) {
        this.setState({class: e.target.value})
        // e.preventDefault();
    }

    componentWillUpdate

    render() {
        let getBackGround = Math.random() > 0.5? "green" : "yellow";

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
                                items={['first', 'second', 'third']}
                                pause="3000"
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
                            alt="home.png"
                        />
                        <RadioButton 
                            name="projects"
                            value="projects"
                            changed={this.radioChangeHandler}
                            isSelected={this.state.class === "projects"}
                            img={ruby}
                            alt="ruby.png"
                        />
                        <RadioButton 
                            name="contact"
                            value="contact"
                            changed={this.radioChangeHandler}
                            isSelected={this.state.class === "contact"}
                            img={angular}
                            alt="angular.png"
                        />
                    </form>
                </div>
                <div
                    className={this.state.class}
                > new </div>
            </div>
        )
    }

}

