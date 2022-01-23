import React, { Component } from "react";
import Logo from './logo';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <span className="Tab">
                    <a href="https://github.com/Spencerkifell/GameWeasel-McHacks">Github</a>
                    <a href="https://mchacks9.devpost.com">Devpost</a>
                    <a href="#about">About</a>
                </span>
                <span className="Title-name">
                    <h1><a href="/">Game Weasel</a></h1>
                </span>
                <Logo />
            </div>
        );
    }
}

export default Header;