import React, { Component } from 'react';
import { searchYoutube } from './apiUtils.js';
import { Input } from 'antd';
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    searchYoutube({q: query})
      .then(this.props.updateSearchResults);
  }

  render(props) {
    return (
      <Div className="search">
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