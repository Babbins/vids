import React, { Component } from 'react';
import Search from './Search.js';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`

`;
const Header = styled.header`
  position: relative;
  padding: 15px;
  border-bottom: 3px red solid;
`;


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
      <Wrapper className="App">
        <Header>
          <Search updateSearchResults = {this.updateSearchResults} />
        </Header>
      </Wrapper>
    );
  }
}

export default App;
