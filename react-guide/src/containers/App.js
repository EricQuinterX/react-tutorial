import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Eric", age: 26 },
      { id: '2', name: "Kevin", age: 25 },
      { id: '3', name: "Melissa", age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Eze";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Kevin", age: 25 },
        { name: "Melissa", age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    persons.forEach(p => {
      if (p.id === id) {
        p.name = event.target.value;
      }
    });
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personId) => {
    const persons = this.state.persons.filter(_ => _.id !== personId);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={ this.state.persons } 
            clicked={ this.deletePersonHandler } 
            changed={ this.nameChangedHandler } />
        </div>
      );
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={ persons } clicked={ this.togglePersonsHandler } />
        { persons }
      </div>
    );
  }
}

export default App;