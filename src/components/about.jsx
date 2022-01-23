import React, { Component } from "react";
import asgharface from '../media/asgharface.jpg';
import alexface from '../media/alexface.jpg';
import jordanface from '../media/jordanface.jpg';
import spencerface from '../media/spencerface.jpg';

class About extends Component {
    render() {
        return (
            <a id="about"><section className="section-about">
                <div className="about">
                    <div className="profile">
                        <a href="https://www.linkedin.com/in/asghar-taqvi/"><h3 className="name">Asghar Taqvi</h3>
                            <img src={asgharface} className="profile-img"/></a>
                        <div className="comments"></div>
                    </div>
                    <div className="profile">
                        <a href="https://www.linkedin.com/in/alex-barbeau-706b051a5/"><h3 className="name">Alex Barbeau</h3>
                            <img src={alexface} className="profile-img"/></a>
                        <div className="comments"></div>
                    </div>
                    <div className="profile">
                        <a href="https://www.linkedin.com/in/jordan-marcus/"><h3 className="name">Jordan Marcus</h3>
                            <img src={jordanface} className="profile-img"/></a>
                        <div className="comments">"This weasel transformed my perspective as a gamer.
                            "Cabela's Alaskan Adventures" is a life changer. Thank you Game Weasel!"</div>
                    </div>
                    <div className="profile">
                        <a href="https://www.linkedin.com/in/spencerkifell/"><h3 className="name">Spencer Kifell</h3>
                            <img src={spencerface} className="profile-img"/></a>
                        <div className="comments"></div>
                    </div>
                </div>
            </section></a>
        );
    }
}

export default About;