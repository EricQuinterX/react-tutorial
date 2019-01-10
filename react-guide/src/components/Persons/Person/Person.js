import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/aux-react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focusInput() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          ref={ this.inputElement }
          type="text" 
          onChange={this.props.changed} 
          defaultValue={this.props.name} />
      </Aux>
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

// Validacion de las props recibidas de los componentes padres
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

 export default withClass(Person, classes.Person);