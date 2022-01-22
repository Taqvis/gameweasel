import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="Tab">
                    <a href="#github">Github</a>
                    <a href="#devpost">Devpost</a>
                    <a href="#about">About</a>
                </div>
                <div className="Title-name">
                    <h1><a href="/">Game Weasel</a></h1>
                </div>
            </div>
        );
    }
}

export default Header;