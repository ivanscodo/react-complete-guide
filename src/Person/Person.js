import React, { Component } from 'react';
import './Person.css';


class Person extends Component{
  
  render(){
    return(
      <div className="Person">
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}
export default Person;
