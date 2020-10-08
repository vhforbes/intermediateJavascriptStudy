import React, { Component } from "react";

class MyComponentClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>CLICK!</button>
      </div>
    );
  }
}

var foo = bar;

const MyComponentFunction = (props) => {
  // Function
  const { title, onButtonClicked } = props; // Destructure so you dont have to call 'this' all the time

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onButtonClicked}>CLICK!</button>
    </div>
  );
};

export { MyComponentClass, MyComponentFunction };
