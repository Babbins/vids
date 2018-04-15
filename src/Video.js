import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;



export default function (props) {
  return (
    <Card 
      hoverable
      cover={<img alt={props.snippet.title} src={props.snippet.thumbnails.high.url} />}
      actions={[<Icon type="save" />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={props.snippet.title}
        description=""
      />
    </Card>
  );
}

