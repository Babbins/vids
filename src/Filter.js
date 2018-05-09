import React, { Component } from 'react';
import {Icon, Button } from 'antd';
import styled from 'styled-components';
<Icon type="filter" />



const Div = styled.div`
  transition: 300ms;
  display: inline-block;
  margin-right: 30px;

  &:hover {
    margin-right: 35px;
  }
  &.open {
    margin-right: 300px;
  }
`;

class Filter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {isOpen} = this.state;
    return (
      <Div className={isOpen ? 'open' : 'closed' }>
        <Button 
          icon="filter"
          onClick={this.toggleFilter}
        >
          Filter
        </Button>
      </Div>
    );
  }
  
}

export default Filter;