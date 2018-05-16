import React, { Component } from 'react';
import { searchYoutube } from './apiUtils.js';
import { Input } from 'antd';
import Filter from './Filter.js';
import styled from 'styled-components';

const AntSearch = Input.Search;

const Div = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

class Search extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      sortBy: 'viewCount',
      uploadDate: 'any',
      query: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleSearch(query) {
    this.setState({query});
    const {sortBy, uploadDate} = this.state;
    searchYoutube({
      q: query,
      order: sortBy,
      uploadDate
    })
      .then(this.props.updateSearchResults);
  }

  updateState(state) {    
    this.setState(state, state => {
      this.handleSearch(this.state.query);
    });
  }

  render() {
    const {sortBy, uploadDate} = this.state;
    return (
      <Div className="search">
        <Filter updateFilters={this.updateState} sortBy={sortBy} uploadDate={uploadDate}/>
        <AntSearch
          placeholder="Search Youtube"
          onSearch={this.handleSearch}
          style={{width :200}}
        />
      </Div>
    );
  }
}

export default Search;