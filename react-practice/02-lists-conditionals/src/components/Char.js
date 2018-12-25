import React from 'react';

const char = (props) => {
  let style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer'
  };

  return (
    <div style={style} onClick={props.click}>{props.char}</div>
  );
};

export default char;