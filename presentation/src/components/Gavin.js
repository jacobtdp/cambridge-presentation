import React from 'react';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

function Gavin() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
                <div className="slide-bullets">
                    <h2>The 2016 Election:</h2>
                    <h4>• What happened?</h4>
                    <h4>• How was the data acquired?</h4>
                    <h4>• The impact.</h4>
                </div>
                <img src={p1} />
                <div className="slide-bullets">
                    <h2>Cambridge Analytica:</h2>
                    <h4>• Basic premise of the company</h4>
                    <h4>• Campaigns CA has worked on</h4>
                    <h4>• How does CA function?</h4>
                </div>
                <img src={p2} />
                <div className="slide-bullets">
                    <h2>The CA Story:</h2>
                    <h4>• Following the election scandal</h4>
                    <h4>• Other companies</h4>
                    <h4>• Other types of data mining and manipulation</h4>
                </div>
                <img src={p3} />

            <h1 className="next-button"><a href="/mechanics">NEXT</a></h1>

        </div>
    )
}

export default Gavin;