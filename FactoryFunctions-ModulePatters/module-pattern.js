// -- Module Pattern ---

// Meet a module:

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

// Insted of creating multiple objects, the module pattern wraps the factory function in an IFFE (Immidiately Invoked Function Expression)

// One of the most used JavaScript patterns

  // Creating a module:

  (function() {
    'use strict'; // Strict mode will protect you from some of the more dangerous parts in JavaScript.
    // Your code here
    // All function and variables are scoped to this function
  })();

  // Exporting our module:

  var myModule = (function() {
    'use strict';
    return { publicMethod: () => console.log('Hello World!') };  
    })()

    myModule.publicMethod(); // outputs 'Hello World'

  // Private methods & properties:

  myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
  
    function _privateMethod() {
      console.log(_privateProperty); // The _ (underscore) is a common to prefix private properties
    }
  
    return {
      publicMethod: function() {
        _privateMethod();
      }
    };
  })();
  
  // myModule.publicMethod(); // outputs 'Hello World'
  // console.log(myModule._privateProperty); // is undefined protected by the module closure
  // myModule._privateMethod(); // is TypeError protected by the module closure


  // Revealing Module Pattern:

  myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicProperty: publicProperty
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule.publicProperty); // outputs 'I am a public property'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure
  myModule.publicProperty = 'changed' // CAREFUL! Public propertyes can be changed

  // We can look at the end of the module and quickly see what's avaiable to use publicly

  

  