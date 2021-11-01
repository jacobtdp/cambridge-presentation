import React from 'react';

import p11 from '../assets/p11.jpeg';

function Carlita() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
            <h2>Questions for the future:</h2>
            <ul>
                <li>Are data right human rights?</li>
                <li>What might it look like for us to be in control of our data?</li>
            </ul>
            <img src={p11} /> 

            <h1 className="next-button"><a href="/detox">NEXT (bonus)</a></h1>

        </div>
    )
}

export default Carlita;