import React, { Component } from "react";
import logo from "../logo.svg";

class Logo extends Component {
    render() {
        return (
            <div className="Logo-container">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default Logo;