import React, { Component } from "react";
import logo from "../media/logo.svg";

class Logo extends Component {
    render() {
        return (
            <a href="/"><div className="Logo-container">
                <img src={logo} className="App-logo" alt="logo"/>
            </div></a>
        );
    }
}

export default Logo;