import React, { Component } from 'react';
import classes from './Person.css';

export default class Person extends Component {

  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
      </div>
    )
  }
}

// const person = (props) => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} defaultValue={props.name} />
//     </div>
//   )
// };

// export default person;