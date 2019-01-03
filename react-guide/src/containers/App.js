import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: '1', name: "Eric", age: 26 },
        { id: '2', name: "Kevin", age: 25 },
        { id: '3', name: "Melissa", age: 23 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }

  switchNameHandler = (newName) => {
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
    console.log("[App.js] Inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
        { persons }
      </div>
    );
  }
}

export default App;