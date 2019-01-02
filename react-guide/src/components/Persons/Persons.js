import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {

  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  render () {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return <Person 
        key={person.id} 
        name={person.name} 
        age={person.age} 
        click={() => this.props.clicked(person.id)} 
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }
}

// const persons = (props) => props.persons.map((person, index) => {
//   return <Person 
//     key={person.id} 
//     name={person.name} 
//     age={person.age} 
//     click={() => props.clicked(person.id)} 
//     changed={(event) => props.changed(event, person.id)} />
// });

// export default persons;