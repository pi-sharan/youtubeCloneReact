import React from 'react';
import '../CSS/VidCard.css';

class VidCard extends React.Component {
    render() {
        const onContainerClick = (event) => {
            this.props.onCardSelect(this.props.vid);
        }


        return (
            <div class="container" onClick={onContainerClick}>
                <div class="thumbnail">
                    <img src={this.props.vid.snippet.thumbnails.default.url} />
                </div>
                <div class="title">
                    {this.props.vid.snippet.title}
                </div>
            </div>
        );
    }
}

export default VidCard;