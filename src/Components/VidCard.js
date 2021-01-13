import React from 'react';
import '../CSS/VidCard.css';

const VidCard = props => {

    const vidRef = React.createRef();

    console.dir(vidRef);

    return (
        <div class="container">
            <div class="thumbnail">
                <img src={props.thumbnail} />
            </div>
            <div class="title">
                {props.title}
            </div>
        </div>
    );
}

export default VidCard;