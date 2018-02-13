import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component  {

 constructor(props) {
     super(props);
     this.state = { greeting: '' };
     this.removeGreeting = this.removeGreeting.bind(this);
 }

 removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

 render () {
  return (
    <div 
      className="HelloWorld">{this.state.greeting}{this.props.name}
      <button className="Button" onClick={this.removeGreeting}>del</button>
    </div>
  );
 }
}

export default HelloWorld;