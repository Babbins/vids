import React, { Component } from 'react';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
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
        <Search updateSearchResults = {this.updateSearchResults} />
        <p>{this.state.searchResults}</p>
      </div>
    );
  }
}

export default App;
