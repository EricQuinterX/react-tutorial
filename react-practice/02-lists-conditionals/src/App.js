import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {

  state = {
    text: '',
    chars: ''
  }

  textChangedHandler = (value) => {
    let chars = value.split('').filter((item, pos, self) => {
      return self.indexOf(item) === pos
    }).join('');
    this.setState({ text: value, chars: chars });
  }

  deleteCharacterHandler = (char) => {
    let text = this.state.text.split('').filter(c => c !== char).join('');
    let chars = this.state.chars.split('').filter(c => c !== char).join('');
    this.setState({ text: text, chars: chars });
    document.getElementById('box-input').value = text; // update input value
  }

  render() {
    let chars = this.state.chars.split('').map((c, index) => {
      return <Char key={index} char={c} 
        click={() => this.deleteCharacterHandler(c)}/>
    });

    return (
      <div className="App">
        <input id="box-input"
          placeholder="Enter value"
          style={{padding: '5px'}} type="text"
          onChange={(event) => this.textChangedHandler(event.target.value)} />
        <Validation size={this.state.text.length} />
        { chars }
      </div>
    );
  }
}

export default App;
