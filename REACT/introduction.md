# Why React?

- Reusability of componets

- Well supported (very popular)

- Unopinionated, don't force you to follow a pattern or logic

- Smaller learning curve

## Components 

Components are "building blocks" that you can reuse in the application.

To use React you should be able to divide the application into separate components.

Each component is a ES6 module. So we write each component on it's own module, and then import all of the modules to their main container (App.js)

**React components should always be named with Capital first letter**

## Class Component
```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super() // Used to call functions on a parent object (in this case Component)
  }

  { Javascript code here! }

  render() { // render() return as JSX 
    return (
      // Can't use class, must use className
      <div className='main-div'>
        Hello World
      </div>
    )
  }
}

export default App // Export the App component
```

render() is the most used lifecycle function!
Every component needs render()


## Functional Component

```javascript
import React from "react"

const App = () => {
  return <div className="Äpp">Hello World</div>
}

export default App
```

## Create-react-app

Set's up a complete react configuration.

`npx create-react-app <appName>` Create the project
`npm start` View it in the browser








