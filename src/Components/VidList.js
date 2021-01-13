import React from 'react';
import VidCard from './VidCard.js'
import '../CSS/VidList.css';

class VidList extends React.Component {



    render() {
        this.videos = this.props.Vids.map(vid => {
            return (<VidCard onCardSelect={this.props.onCardClick} vid={vid}></VidCard>)
        });

        return (
            <div class="scroll">
                {this.videos}
            </div>
        );
    }
}

export default VidList;