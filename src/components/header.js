import React from 'react';
import './header.css';
// import { Selection } from './form.js'
import './about.css';
import { RadioButton } from './radio_button.js'


export class Heading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            class: "about",
            style: "about"
        }
    }

    radioChangeHandler(e) {
        if (e.target.value != this.state.class) {
            this.setState({ class: e.target.value })
        }
    }

    render() {
        let getBackGroundColor = Math.random() > 0.5? "green" : "yellow";

        let heading = {
            backgroundColor: getBackGroundColor,
            height: "400px",
            width: "100%",
            display: "block",
    }
 

        return (
            <div
                className="wrapper"
                >
                <div
                    style={heading}
                >
                    <div
                        className="nameFrame"
                    >
                        <h1>Inside Box</h1>
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
                            // isSelected={}
                        />
                        <RadioButton />
                        <RadioButton />
                    </form>
                </div>
                <div
                    className={this.state.class}
                > new </div>
            </div>
        )
    }

}

// export function Heading() {
//     let getBackGroundColor = Math.random() > 0.5 ? "green" : "rgb(45, 61, 202)";

//     let heading = {
//         backgroundColor: getBackGroundColor,
//         // display: "flex",
//         // position: "absolute",
//         height: "400px",
//         width: "100%",
//         // padding: "25% 20%",
//         // alignItems: "center",
//         // padding: "auto",
//         // zIndex: "-1",
//         // verticalAlign: "center"
//     }

//     return (
//         <div>
//             <div
//                 style={heading}
//             >
//                 <div
//                     className="nameFrame"
//                 >
//                     <h1>
//                         inside box
//                     </h1>
//                 </div>
//             </div>
//             <div
//                 className="navBar"
//             >
                
//             </div>
//             <div></div>
//         </div>
//     )
// }