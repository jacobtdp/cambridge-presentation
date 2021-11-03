import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import p14 from '../assets/author_1.jpeg';
import p15 from '../assets/author_2.png';
import audio_authors from '../assets/audio_authors.mp3';

function Authors() {
    return(
        <div className="introduction--container">

            <h1 className="page-title">Cambridge Analytica, Data Misuse, and the 2016 Election</h1>
            <h2>Research based on "The Data that Turned the World Upside-Down"</h2>
            <h4>By Mikael Krogerus and Hannes Grasseggor</h4>
            <ReactAudioPlayer
                className="audio-player"
                src={audio_authors}
                autoPlay
                controls
            />
            <div className="authors-images">
                <div className="author-column">
                    <img src={p14}/>
                    <h5>Mikael Krogerus: Journalist. Notable for psychology-centered "Decision Book"</h5>
                    <p>
                        Krogerus and co-author Roman Tschappler are know for their work on the "Decision Book", which is sort of a meta-analysis
                        of decision making models. The book straddles the line between self-help and psychology, ultimately providing readers
                        with inspiration for how to approach decision making in their own lives.
                    </p>
                </div>
                <div className="author-column">
                    <img src={p15}/>
                    <h5>Hannes Grasseggor: DJ, fashion-designer, Financial Analyst, Economist, and Technology reporter. Author of "Das Kapital bin Ich"</h5>
                    <p>
                        Hannes Grasseggor seems to be involved in many things (according to his website, where this weird image came from).
                        Most essential to this article, however, is Grasseggor's book "Das Kapital bin Ich" (translating to "I am the Capital".), 
                        which offers insights into the data economy and what it means for our online activity to be commodified as it is.
                    </p>
                </div>
            </div>




        </div>
    )
}

export default Authors;