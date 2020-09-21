// Scope

  // --- Global Scope ---

  // Needed to create Modules/API`s that are accessible across scopes

  let globalVariable = 'This variable is on the global scope'

  // --- Local Scope --- 
  
  let parentFunction = () => {
    // Local scope here
    let localVariable = 'I`m only accessible inside this function'

    // --- Function Scope ---

    let childFunction = () => {
      let newScope = 'I`m on accessible on the newFunction'

      // The function creates another scope inside the functions

      // --- Lexical Scope ---

      localVariable = 'Hey, I`m beign changed'

      // the newFunction can access the 'parentFunction` scope
      // That`s called Lexical Scope

    }
  }

// Closures

const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('taco');

// None of the functions created can be accessed outside the functions itself, thats closure

// The concept of closure is that even if functions get passed around, they retain their scope

// printString has access to everything created inside the FactoryFunction()

