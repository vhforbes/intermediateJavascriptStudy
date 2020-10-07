# State and Props

## Props

Pass values and functionality between components.

## State

Handles all values that can change overtime.


```javascript 

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = { // Declaring state ALWAYS IN THE CONSTRUCTOR!
      count: 0,
    };
    
    this.countUp = this.countUp.bind(this); // Binds the conutUp function to the 'this' context
  }

  countUp() { // Function that alters the state object
    this.setState({
      count: this.state.count + 1,
    });
  }

  // NEVER change state directly! Use setState() to change it!!!

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

```