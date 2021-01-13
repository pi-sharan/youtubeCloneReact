import React from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../apis/youtube';
import Video from './Video.js';
import '../CSS/App.css';
import Desc from './Desc.js';
import VidList from './VidList.js'

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async searchTerm => {
        const response = await youtube.get('', {
            params: {
                q: searchTerm,
            }
        });
        this.setState({ videos: response.data.items });
        console.log(this.state.videos);
    };


    render() {
        return (
            <div className="wrapAll">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div class="insideItems">
                    <Video Vids={this.state.videos} />
                    <Desc Vids={this.state.videos} />
                    <VidList Vids={this.state.videos} />
                </div>
            </div>

        );
    }
}

export default App;