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
    window.searchResults = searchResults;
    console.log(`searchResults: ${searchResults}`);
    this.setState( (prevState) => {
      return {...prevState, searchResults};
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <Search updateSearchResults = {this.updateSearchResults} />
        </header>
      </div>
    );
  }
}

export default App;
