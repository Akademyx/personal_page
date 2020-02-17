import React from 'react';
import "./radio_button.css";

export const RadioButton = (props) => {
    return (
            <div className="radio"
                >
                    <label>
                        <input
                            type="radio"
                            name={props.name}
                            value={props.value}
                            onChange={props.changed}
                            checked={props.isSelected}
                        />
                        {/* <img
                            src={home}
                            alt="home"
                            className="icon"
                        >
                        </img> */}
                    </label>
                </div>
    )
}