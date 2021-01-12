import React from 'react';

class Video extends React.Component {
    render() {
        return (
            <video width="800" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
            </video>
        );
    }
}

export default Video;