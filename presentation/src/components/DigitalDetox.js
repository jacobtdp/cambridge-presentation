import React from 'react';

import p12 from '../assets/choice_1.gif';
import p13 from '../assets/choice_2.gif';

import '../styles/detox.css';

function Detox() {
    return(
        <div className="introduction--container">

            <div className="fin-container">
                <h1 className="page-title">Choose a path.</h1>
                <div className="choice-container">
                        <div>
                            <h3>Love internet :)</h3>
                            <a href={'https://www.youtube.com/watch?v=TlhIk7iPU9o'} target="_blank"><img src={p12} /></a>
                        </div>
                        <div>
                            <h3>Hate internet :(</h3>
                            <a href={'https://www.youtube.com/watch?v=05sJVEwZuZ4'} target="_blank"><img src={p13} /></a>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Detox;