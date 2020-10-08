import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    console.log('Contructor Called')
    super(props)

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this) // ONLY Here we can use this.state
    this.decrement = this.decrement.bind(this)

  }

  increment() {
    this.setState({counter: this.state.counter + 1})
  }

  decrement() {
    this.setState({counter: this.state.counter - 1})
    console.log(this.state)
  }
  // Here we use this.setState() !!!!!

  componentDidMount() {
    console.log('Component Did Mount')
    console.log('-------------------')

  }

  componentDidUpdate() {
    console.log('Component Did Update')
    console.log('--------------------')
    
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
    console.log('----------------------')

  }

  


  render() {
    console.log('Render Called')
    return <div>
      <p className="counter">
        Counter: {this.state.counter}
      </p>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  }
}

export default Counter