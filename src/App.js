import React, { Component } from 'react';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor() {
    this.state = {
      savedVids: [],
      searchResults: []
    }
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }
  updateSearchResults(searchResults) {
    this.setState( (prevState) => {
      return {...prevState, searchResults};
    });
  }
  render() {
    return (
      <div className="App">
        <Search handler = {this.updateSearchResults} />
      </div>
    );
  }
}

export default App;
