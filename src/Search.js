import React, { Component } from 'react';
import { searchYoutube } from './apiUtils.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
    };
    this.handleChangeQ = this.handleChangeQ.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChangeQ(evt) {
    this.setState({q: evt.target.value});
  }

  handleSearch() {
    const {state, props} = this;
    searchYoutube(state.q)
      .then(props.updateSearchResults);
  }

  render(props) {
    return (
      <div className="search">
        <input className="searchInput" type="text" onChange = {this.handleChangeQ}/>
        <button className="searchBtn" onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;