import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(props){
    super(props);
  }

  state = {
    persons: [{
      "name": "Teste",
      "age": 27
    },
    {
      "name": "Ivan1",
      "age": 28
    },
    {
      "name":"Ivan2",
      "age": 29
    }
    ]
  }

  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      persons: [
      {
        "name": event.target.value,
        "age": 27
      },
      {
        "name": "Ivan1",
        "age": 28
      },
      {
        "name":"Ivan2",
        "age": 29
      }
      ]});
      console.log(this.state.persons[0].name);
    }

  render() {
    return (
      <div>
        <Person changed={this.nameChangedHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }

}

export default App;
