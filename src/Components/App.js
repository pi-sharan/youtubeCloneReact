import React from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../apis/youtube';

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
        console.dir(this.state.videos);
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* <h1>
                    {console.log(this.state.videos.length)}
                </h1> */}
            </div>

        );
    }
}

export default App;