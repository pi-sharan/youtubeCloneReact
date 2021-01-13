import React from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../apis/youtube';
import Video from './Video.js';
import '../CSS/App.css';
import Desc from './Desc.js';
import VidList from './VidList.js'

class App extends React.Component {
    state = { videos: [], currentVid: undefined };

    onSearchSubmit = async searchTerm => {
        const response = await youtube.get('', {
            params: {
                q: searchTerm,
            }
        });
        this.setState({ videos: response.data.items });
    };

    onCardSelect = (vid) => {
        this.setState({ currentVid: vid });
        // console.log(vid);
    }


    render() {

        return (
            <div className="wrapAll">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div class="insideItems">
                    <Video Vid={this.state.currentVid} />
                    <Desc Vid={this.state.currentVid} />
                    <VidList Vids={this.state.videos} onCardClick={this.onCardSelect} />
                </div>
            </div>

        );
    }
}

export default App;