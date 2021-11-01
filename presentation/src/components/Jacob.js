import React from 'react';

import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import p10 from '../assets/p10.jpeg';

function Jacob() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
                <div className="slide-bullets">
                    <h2>How well does data really understand us?:</h2>
                    <h4>• Previously: only demographic data</h4>
                    <h4>• Now: AI powered predictive models</h4>
                </div>
                <img src={p8} />
                <div className="slide-bullets">
                    <h2>Target discovers a pregnancy:</h2>
                    <h4>• Purchasing patterns tipped them off</h4>
                    <h4>• Infant care ads began arriving in the mail</h4>
                    <h4>• First high-profile instance of predictive advertising breaching privacy</h4>
                </div>
                <img src={p9} />
                <div className="slide-bullets">
                    <h2>Kosinski indicated predictive models getting more accurate:</h2>
                    <h4>• 95% accurate for skin-color</h4>
                    <h4>• 88% for sexual orientation</h4>
                    <h4>• 85% for political affiliation</h4>
                    <h4>• Alcohol, drug use, parent marital status etc...</h4>
                </div>

                <p className="quote">surveillance capitalism as “the unilateral claiming of private human experience as free raw material for translation into behavioral data, [which] are then computed and packaged as prediction products and sold into behavioral futures markets,” in service of organizations that “[have] a commercial interest in knowing what we will do now, soon, and later.” - Professor Shoshana Zuboff</p>

                <div className="slide-bullets">
                    <h2>Surveillance capitalism: stripping our autonomy?:</h2>
                    <h4>• Theoretical framework for selling us products and ideas</h4>
                    <h4>• Implicit threat of psychological manipulation</h4>
                    <h4>• Skepticism exists</h4>
                </div>
                <img src={p10} />
                <div className="slide-bullets">
                    <h2>How susceptible are we to advertising, anyway?:</h2>
                    <h4>• Marking companies overstate their efficacy</h4>
                    <h4>• "I-was-going-to-buy-it-anyway" syndrome</h4>
                    <h4>• Simonson and Rosen question online advertising</h4>
                </div>

                <p className="quote">“​​There are a few reasons to be skeptical when Facebook concludes that its ads are working spectacularly. First is the basic B.S.-detector blaring inside your soul saying you shouldn't automatically believe companies who say "our research has apparently concluded unambiguously that we are awesome." - Derek Thompson in The Atlantic</p>
                <p className="quote">“In fact, there's reason to wonder whether all advertising—online and off—is losing its persuasive punch. Itamar Simonson and Emanuel Rosen, the authors of the new book Absolute Value, have an elegant theory about the weakened state of brands in the information age. Corporations used to have much more control over what kind of information consumers could find about their company. The signal of advertising was stronger when it wasn’t diluted by the sound pollution of the Internet and social media.” - Derek Thompson, again in The Atlantic</p>

            <h1 className="next-button"><a href="/questions">NEXT</a></h1>

        </div>
    )
}

export default Jacob;