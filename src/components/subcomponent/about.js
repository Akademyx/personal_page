import React from 'react';
import './about.css'

export function AboutPage() {
    // console.log("About Page works")
    return (
        <div
            className="about"
        >
            <div className="self_profile" >
                <h1>Alex Tran</h1>

                <div className="self_profile_desc" >
                    <h4>Education</h4>
                    <ul>
                        <li>Here</li>
                        <li>Here</li>
                        <li>& Here</li>
                    </ul>
                </div>

                <div className="self_profile_desc" >
                    <h4>Tools</h4>
                    <ul>
                        <li>Ruby</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>

            </div>

            <div className="self_description" >
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}