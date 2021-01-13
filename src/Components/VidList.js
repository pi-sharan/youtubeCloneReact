import React from 'react';
import VidCard from './VidCard.js'
import '../CSS/VidList.css';

const VidList = props => {
    const videos = props.Vids.map(vid => {
        return (<VidCard thumbnail={vid.snippet.thumbnails.default.url} title={vid.snippet.title}></VidCard>)
    });

    return (
        <div class="scroll">
            {videos}
        </div>
    );
}

export default VidList;