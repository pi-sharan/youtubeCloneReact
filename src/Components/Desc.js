import React from 'react';
import '../CSS/Desc.css';

const Desc = props => {
    let text = "";

    if (props.Vid != undefined) {
        text = props.Vid.snippet.description;
    }

    return (
        <div className="desc">
            {text}
        </div>
    );

}

export default Desc;