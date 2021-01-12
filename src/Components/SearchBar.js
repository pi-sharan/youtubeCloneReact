import React from 'react';
import '../CSS/SearchBar.css'

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div class="searchBox">
                <form onSubmit={this.onSearchSubmit} class="myForm">
                    <div class="ui fluid icon input searchBar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.searchTerm}
                            onChange={e => this.setState({ searchTerm: e.target.value })}
                        />
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>


        );
    }
}

export default SearchBar;