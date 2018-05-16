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
    this.state = {
      selectedKeys: ['1','5']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      if (e.key < 5) {
        this.setState({
          selectedKeys: [e.key, prevState.selectedKeys[1]]
        });
      } else {
        this.setState({
          selectedKeys: [prevState.selectedKeys[0], e.key]
        });
      }
    })
  }

  render() {
    const menu = (
      <Menu
        selectedKeys={this.state.selectedKeys}
        onClick={this.handleClick}
      >
        <SubMenu title="Sort By">
          <Menu.Item key="1">Views</Menu.Item>
          <Menu.Item key="2">Relevance</Menu.Item>
          <Menu.Item key="3">Upload Date</Menu.Item>
          <Menu.Item key="4">Rating</Menu.Item>
        </SubMenu>
        <SubMenu title="Upload Date">
          <Menu.Item key="5">Any</Menu.Item>
          <Menu.Item key="6">Last Hour</Menu.Item>
          <Menu.Item key="7">Today</Menu.Item>
          <Menu.Item key="8">This Week</Menu.Item>
          <Menu.Item key="9">This Month</Menu.Item>
          <Menu.Item key="10">This Year</Menu.Item>
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