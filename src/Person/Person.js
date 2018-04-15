import React, { Component } from 'react';


class Person extends Component{
  constructor(props){
    super(props);
    //this.incrementCounter = this.incrementCounter.bind(this);
    //this.decrementCounter = this.decrementCounter.bind(this);
  }
  state = {
    persons: [{
      "name": "Ivan",
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
    ],
    counter: 0
  }

  incrementCounterHandler = () => {
    if(this.state.counter + 1 < this.state.persons.length){
      this.setState({
        counter: this.state.counter+1
      });
    }
  }

  decrementCounterHandler = () =>{
    if(this.state.counter - 1 >= 0){
      this.setState({
        counter: this.state.counter-1
      });
    }
  }
  showElementFocused = (element) => {
    debugger;
    console.log(element);
  }

  testOnCopy = (event) => {
    console.log(event.clipboardData.getData('text'));
  }

  render(){
    return(
      <div onCopy={this.testOnCopy}>
        <h1>{this.state.persons[this.state.counter].name}  - Age: {this.state.persons[this.state.counter].age}</h1>
        <button onClick={this.incrementCounterHandler} onFocus={this.showElementFocused}>Incrementa</button>
        <button onClick={this.decrementCounterHandler}>Decrementa</button>
      </div>
    );
  }
}
export default Person;
