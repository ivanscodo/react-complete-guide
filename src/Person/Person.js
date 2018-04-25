import React, { Component } from 'react';
import './Person.css';

class Person extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Person">
        <p onClick={this.props.click} data-index={this.props.index}>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} data-index={this.props.index}/>
      </div>
    );
  }
}

export default Person;