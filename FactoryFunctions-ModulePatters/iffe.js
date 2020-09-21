// IFFE (Immidiately Invoked Function Expression)

  // Function Declaration VS Function Expression

  function myFunction () { /* logic here */ } // Function declaration

  var myFunction = function () { /* logic here */ }; // Function expression

  // A function expression is similar to the function declaration, however it doesent need a name.
  // The key thing about JavaScript expressions is that they return values.
  // In both cases above the return value of the expression is the function.


// What's an IFFE?

// It's a function expression that is imidiatly invoked

(function () { 
  // logic here
})();

// But, why? 

// The main reason to use IFFE's is to obtain data privacy
  // Other reasons:
  // - No unecessary poluting the global namespace
  // - Self-documenting
  // - Less unecessary invocation
