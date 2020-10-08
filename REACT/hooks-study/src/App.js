import React, { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState('black')

  // Convention is to put **set** before the first value
  // Just like the example above

  useEffect(() => {
    

    const changeColorOnClick = () => {
      console.log('Color Change')
      if (color === 'black') {
        setColor('red')
      } else {
        setColor('black')
      }
    }

      const myDiv = document.querySelector('#myDiv')

      myDiv.addEventListener('click', changeColorOnClick)

      console.log('useEffect')

    return () => {
      console.log('Use Effect Return')
      myDiv.removeEventListener('click', changeColorOnClick)
    }

  }, [color])  

  return (
    <div className="App">
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
}

export default App;
