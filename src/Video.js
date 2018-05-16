import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;



export default class Video extends Component {
  constructor(props) {
    super(props);
    console.log('video props', props);
    this.openVideoOnYoutube = this.openVideoOnYoutube.bind(this);
  }

  openVideoOnYoutube() {
    const win = window.open(this.props.url, '_blank');
    win.focus();
  }

  render() {
    const {thumbnails, title, description} = this.props.snippet;
    return (
      <Card 
        hoverable
        cover={<img alt={title} src={thumbnails.high.url} />}
        actions={[<Icon type="save" />, <Icon type="youtube" onClick={this.openVideoOnYoutube}/>]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={title}
          description={description}
        />
      </Card>
    );
  }
  
}


