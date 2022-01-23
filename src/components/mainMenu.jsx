import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <section className="section-menu">
                <div className="empty"></div>
                <div className="main-menu">
                    <div className="description">
                        <p>Struggling to think of a game to play?</p>
                    </div>
                    <div className="buttons">
                        <Link to='/game/?id='>
                            <button className="button-82-pushable" role="button">
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">
                                    LET THE WEASEL DECIDE
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;