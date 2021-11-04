import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpg';

import audio_mechanics_1 from '../assets/audio_mechanics_1.mp3';
import audio_mechanics_2 from '../assets/audio_mechanics_2.mp3';

function Le() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
            <ReactAudioPlayer
                className="audio-player"
                src={audio_mechanics_1}
                autoPlay
                controls
            />
                <div className="slide-bullets">
                    <h2>Behavior data:</h2>
                    <h4>• What it is</h4>
                    <h4>• Predictability of people</h4>
                    <h4>• Collections from searches, website visits</h4>
                </div>
                <img src={p4} />
                <div className="slide-bullets">
                    <h2>Website and system preferences:</h2>
                    <h4>• How does the system work</h4>
                    <h4>• User attributes</h4>
                    <h4>• Examples</h4>
                </div>
                <div className="slide-bullets">
                    <h2>Targeted Groups:</h2>
                    <h4>• Group categorization</h4>
                    <h4>• Data breaches</h4>
                    <h4>• Impact</h4>
                </div>
                <img src={p5} />

            <ReactAudioPlayer
                className="audio-player"
                src={audio_mechanics_2}
                controls
            />
                <div className="slide-bullets">
                    <h2>Actions taken by facebook:</h2>
                    <h4>• What did FB do in response?</h4>
                </div>
                <img src={p6} />
                <div className="slide-bullets">
                    <h2>The cause of data breaches in 2021:</h2>
                    <h4>• Causes</h4>
                    <h4>• Examples</h4>
                    <h4>• Actions</h4>
                </div>
                <div className="slide-bullets">
                    <h2>Current concerns:</h2>
                    <h4>• Changes</h4>
                    <h4>• Far-reaching influence</h4>
                </div>
                <img src={p7} />


        </div>
    )
}

export default Le;