import React, { Component } from 'react';
import styled from 'styled-components';
import Video from './Video.js';
import {Row, Col} from 'antd';

export default function(props) {
  return (
    <Row type="flex" justify="space-around">
      { props.videos.map((video, idx) => {
        return <Col 
          style={{width: 320, 'margin-top': '30px'}} 
          sm={24} 
          md={12} 
          lg={8}
          > 
            <Video key={idx} {...video} /> 
          </Col>
      })}
    </Row>
  );
}