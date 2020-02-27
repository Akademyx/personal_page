import React from 'react';
import './projects.css'

export const ProjectWrapper = ({items}) => {
    const listing = (items.list).map((thing) =>
            <li>{thing}</li>
    )
    console.log(items)
    return(
        <div className="projectWrapper">
            <div className="description_side">
                <h4>{items.header}</h4>
                <p>{items.description}</p>
            </div>
            <div className="list_side">
                {listing}
            </div>
        </div>
    )
} 