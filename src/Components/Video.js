import React from 'react';
import '../CSS/Video.css';

class Video extends React.Component {
    render() {
        const baseURL = "https://www.youtube.com/embed/";
        let currURL = "";
        if (this.props.Vid != undefined) {
            currURL = baseURL + this.props.Vid.id.videoId;
        }
        return (
            <iframe controls
                src={currURL}>
            </iframe>
        );
    }

}

export default Video;