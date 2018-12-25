import React from 'react';

const validation = (props) => {
  let color = null;
  let message = null;

  if (props.size < 6) {
    color = 'green';
    message = 'Text too short';
  } else if (props.size > 15) {
    color = 'red';
    message = 'Text long enough';
  } else {
    color = 'gray';
    message = 'Text lenght normal';
  }

  let style = {
    color: color,
    border: '1px solid #ccc',
    padding: '16px'
  }

  let component = props.size === 0 ? null : <div style={style}>{ message }</div>; 

  return component;
};

export default validation;