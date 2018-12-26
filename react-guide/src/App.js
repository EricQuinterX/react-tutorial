import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';



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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id} 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(person.id)} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');
    
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
