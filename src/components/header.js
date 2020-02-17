import React from 'react';
import './header.css';
// import './about.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { theForm } from './form.js'
// import Navbar from 'react-bootstrap/NavBar';
// import Bootstrap from 'react-bootstrap/bootstrap';
import './about.css';
//header should rotate images

export class Heading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            class: "about",
            style: "about",
        }
    }

    render() {

        let getBackGroundColor = Math.random() > 0.5? "green" : "yellow";
        // let getBackgroundColor = "green"
        let heading = {
            backgroundColor: getBackGroundColor,
            height: "400px",
            width: "100%",
            display: "block",
            // padding: "auto"
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
                 {theForm}
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