import React from 'react';
import '../CSS/Video.css';

const Video = props => {
    const baseURL = "https://www.youtube.com/embed/";
    let currURL = "";
    if (props.Vids.length >= 1) {
        currURL = baseURL + props.Vids[0].id.videoId;
    }
    return (
        <iframe controls
            src={currURL}>
        </iframe>
    );

}

export default Video;