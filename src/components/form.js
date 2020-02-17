import React from 'react';
import './form.css';

export function theForm() {
    return (
        <form>
            <div className="radio"
            >
                <label>
                    <input
                        type="radio"
                        value="option1"
                        checked={true}
                    />
                </label>
            </div>
            <div className="radio"
            >
                <label>
                    <input
                        type="radio"
                        value="option2"
                    // checked={true}
                    />
                </label>
            </div>
            <div className="radio"
            >
                <label>
                    <input
                        type="radio"
                        value="option3"
                    // checked={true}
                    />
                </label>
            </div>
        </form>
    )
}