import React, { Component } from 'react';
import styled from 'styled-components';
import Video from './Video.js';

export default function(props) {
  return (
    <div> 
      { props.videos.map((video, idx) => {
        return <Video key={idx} {...video} />
      })}
    </div>
  );
}