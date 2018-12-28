import React from 'react';
import classes from './Person.css';

const person = (props) => {
  // if (Math.random() > 0.7) throw new Error('Something went wrong');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  )
};

export default person;