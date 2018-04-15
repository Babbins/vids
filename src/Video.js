import React, { Component } from 'react';
import styled from 'styled-components';

export default function(props) {
  return (
    <div>
      <h4>{props.snippet.title}</h4>
      <a href={props.url}>
        <img src={props.snippet.thumbnails.medium.url} alt={props.snippet.title} />
      </a>
    </div>
  );
}

