import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {
        id: 'aasdadsdasdas',
        name: 'Ivan0',
        age: 27
      },
      {
        id: 'asdasdasdasds',
        name: 'Ivan1',
        age: 28
      },
      {
        id: 'aaaaaaaaaasssdsdsds',
        name: 'Ivan2',
        age: 29
      }
      ],
    showPersons: false,
  }

  

  hidePersons = () => {
    const show = this.state.showPersons;
    this.setState({showPersons: !show});
  }

  nameChangedHandler = (event) => {
    const personId = event.target.getAttribute("data-index");
    
    let personsArray = [...this.state.persons];
    let currentPersonPosition = personsArray.findIndex(person => {
      return person.id === personId;
    });

    let currentPerson = personsArray[currentPersonPosition];
    currentPerson.name = event.target.value;

    this.setState({
      persons: personsArray
    });
  }
  
  deletePersonHandler = (event) => {
    let position = event.target.getAttribute("data-index");
    let personsArray = [...this.state.persons];
    personsArray.splice(position, 1);
    
    this.setState({
      persons: personsArray
    });

  }

  render() {
    console.log("App render");
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                    <Person
                        click={this.deletePersonHandler}
                        name={person.name} 
                        age={person.age} 
                        changed={this.nameChangedHandler}
                        index={person.id}
                        key={person.id}
                    />
              );
          })
        }
        </div>
      )
    }

    return (
        <div>
          <button onClick={this.hidePersons}>Show/hide persons</button>
            {persons}
        </div>
    );
  }
}

export default App;