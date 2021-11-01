import React from 'react';
import Ticker from './Ticker.js';
import '../styles/nav.css';

function Nav() {

    return (
        <div className="Navbar">
            <div className="tier-one">
                <h1 className="title"><a href="/introduction">Data_Breach.com</a></h1>
            </div>
            <div className="tier-two">
                <Ticker />
            </div>
        </div>
    );
}

export default Nav;