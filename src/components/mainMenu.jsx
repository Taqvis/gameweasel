import React, { Component } from "react";

class Menu extends Component {
    render() {
        return (
            <section className="section-menu">
                <div className="empty"></div>
                <div className="main-menu">
                    <div className="description">
                        <p>Welcome to Game Weasel, the all knowing gamer search engine for gamers far and wide.</p>
                        <p>To find your game recommendation, either choose quick search or try your hand
                            at the weasel.</p>
                    </div>
                    <div className="buttons">
                        <a href="#quick" className="btn-quick-search">Quick Search</a>
                        <a href="#weasel" className="btn-weasel">Weasel</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;