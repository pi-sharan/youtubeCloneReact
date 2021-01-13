import React from 'react';

const Desc = props => {
    let text = "";

    if (props.Vids.length >= 1) {
        text = props.Vids[0].snippet.description;
    }

    return (
        <div>
            {text}
        </div>
    );

}

export default Desc;