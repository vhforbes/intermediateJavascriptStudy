import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponentClass, MyComponentFunction } from './components/MyComponent'

// ------- Functional Component -----
// function App() {

//   const click = text => {
//     return () => {
//       console.log(text)
//     }
//   }
  
//   return (
//     <div className="App">
//       <MyComponentClass title='React Component' onButtonClicked={click('text')}/>
//       <MyComponentFunction title='React Function' onButtonClicked={click('text')}/>
//     </div>
//   );
// }


// ------ Class Component -------
class App extends Component { // Using Class to make App component

  constructor (props) {
    super(props)

    this.state = {
      bananas: 0,
    }

    this.countUp = this.countUp.bind(this)
    this.onClickBtn = this.onClickBtn.bind(this) // bind makes it stay in the same context
  }

  countUp() {
    this.setState({
      bananas: this.state.bananas + 1,
    })
    console.log(this.state.bananas)
  }

  onClickBtn() {
    console.log("this")
  }

  render() {
    return (
      <div>
        <MyComponentClass title="Class" onButtonClicked={this.countUp} />
        <MyComponentFunction title='React Function' onButtonClicked={this.onClickBtn}/>
      </div>
    )
  }
}

export default App;
