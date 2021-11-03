import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import p11 from '../assets/p11.jpeg';
import audio_questions from '../assets/audio_questions.mp3';

function Carlita() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
            <ReactAudioPlayer
                className="audio-player"
                src={audio_questions}
                autoPlay
                controls
            />
            <h2>Questions for the future:</h2>
            <ul>
                <li>Are data right human rights?</li>
                <li>What might it look like for us to be in control of our data?</li>
            </ul>
            <img src={p11} /> 


        </div>
    )
}

export default Carlita;