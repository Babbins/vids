import React, { Component } from 'react';
import {Icon, Button, Overlay, Menu, Dropdown } from 'antd';
import styled from 'styled-components';
const SubMenu = Menu.SubMenu;
const Div = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

class Filter extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const filterType = e.keyPath[1];
    if (filterType === 'Sort By') {
        this.props.updateFilters({sortBy: e.key});
    } else if (filterType === 'Upload Date') {
      this.props.updateFilters({uploadDate: e.key});
    }
  }

  render() {
    const {sortBy, uploadDate} = this.props;
    const menu = (
      <Menu
        selectedKeys={[sortBy, uploadDate]}
        onClick={this.handleClick}
      >
        <SubMenu title="Sort By" key="Sort By">
          <Menu.Item key="viewCount">Views</Menu.Item>
          <Menu.Item key="relevance">Relevance</Menu.Item>
          <Menu.Item key="date">Upload Date</Menu.Item>
          <Menu.Item key="rating">Rating</Menu.Item>
        </SubMenu>
        <SubMenu title="Upload Date" key="Upload Date">
          <Menu.Item key="any">Any</Menu.Item>
          <Menu.Item key="hour">Last Hour</Menu.Item>
          <Menu.Item key="day">Today</Menu.Item>
          <Menu.Item key="week">This Week</Menu.Item>
          <Menu.Item key="month">This Month</Menu.Item>
          <Menu.Item key="year">This Year</Menu.Item>
        </SubMenu>
      </Menu>
    );
    return (
      <Div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button icon="filter">
            Filter
          </Button>
        </Dropdown>
      </Div>
    );
  
  }
}

export default Filter;