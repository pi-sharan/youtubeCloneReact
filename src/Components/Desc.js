import React from 'react';
import '../CSS/Desc.css';

const Desc = props => {
    let text = "";

    if (props.Vids.length >= 1) {
        text = props.Vids[0].snippet.description;
    }

    return (
        <div className="desc">
            {text}
        </div>
    );

}

export default Desc;