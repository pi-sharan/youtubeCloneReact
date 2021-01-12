import React from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../apis/youtube';
import Video from './Video.js';

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async searchTerm => {
        const response = await youtube.get('', {
            params: {
                q: searchTerm,
                part: 'snippet',
                key: 'AIzaSyDAiqQHJJc_wKi7qLIya2hb9fO8ImCC3pQ',
                maxResults: 30
            }
        });
        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Video />
            </div>

        );
    }
}

export default App;