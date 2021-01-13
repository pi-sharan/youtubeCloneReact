import React from 'react';
import '../CSS/Video.css';

class Video extends React.Component {
    render() {
        const baseURL = "https://www.youtube.com/embed/";
        let currURL = "";
        if (this.props.Vid != undefined) {
            currURL = baseURL + this.props.Vid.id.videoId;
            return (
                <iframe controls autoplay="true"
                    src={currURL}>
                </iframe>
            );
        }
        else {
            return (
                <video controls width="700">
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            );
        }
    }

}

export default Video;