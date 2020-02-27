import React from 'react';
import './projects.css';
import {ProjectWrapper} from './project_wrapper.js'

export function Project() {
    const ruby = {
        header: "Hydroponics",
        description: "Full stack web application that does particularly something",
        list: ["Ruby-on-Rails, Css, HTML, SQLite3, Bootstrap"]
    }
    const python = {
        header: "Library lending",
        description: "Full stack app that keeps records and inventory",
        list: ["Django, MYSQL, CSS, HTML, Jquery"]
    }
    return (
        <div
            className="projects"
        >
            <ProjectWrapper items={ruby} />
            <ProjectWrapper items={python} />
        </div>
    )
}