// Study of the article https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9


// --- Delegation / Differential Inheritance ---

  // "A delegate prototype is an object that serves as a base for another object."

  // The new object gets a reference to the prototype

  // "Method delegation can preserve memory resources because you only need
  // one copy of each method to be shared by all instances. "


// --- Concatenative Inheritance / Cloning / Mixins ---

  // "Concatenative inheritance is the process of copying the properties from one 
  // object to another, without retaining a reference between the two objects."

  // Cloning is a great way to store default state for objects: 
  //This process is commonly achieved using `Object.assign()`
  Object.assign()


// --- Functional Inheritance ---

  // "Functional inheritance makes use of a factory function, 
  //and then tacks on new properties using concatenative inheritance."

  // Allows to use function closure to encapsulate private data.



// Further review: 

// - Stamps: "Stamps are composable factory functions."