import React, { Component } from 'react';


class Person extends Component{
  
  render(){
    return(
      <div>
        <h1>Name: {this.props.name} - age: {this.props.age}</h1>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}
export default Person;
