// Class is a new syntax that does the same thing as an object contructor.

// The concept of Class in JS doesn't exist.

// It goes against the "Composition over Inheritance" notion.

// Basically just syntatic sugar.

// Learning class:

class User {
  constructor(name, age) {
    this.name = name;
    this.age = 24;
  }

  sayHi() {
    console.log(this.name)
  }
}

let user = new User('Victor') // Creates a user variable of 'class User'

// Class-methods are non-enumerable
  // That means that if we call a for...in, it wont loop the created methods

// Class always "use strict"


// ---- Getters / Setters ----

class UserGetterSetter {
  constructor(name) {
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value

    if (value.length < 4) {
      console.log('name is too short.') 
      return
    }  
  }
}

// ---- Class Fields ----

// Syntax that allow to add properties
  // The previous only had methods

class UserClassFields {
  name = 'Victor' // Class Field
  age;
  constructor(name, age) { // Constructor can give value to the properties.
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log(`Hi ${this.name}`)
  }
}

// ---- Extends ----
  // Keyword used in 'class declarations' or 'class expressions' to create a class as a child of another class

  class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speakAnimal() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  // let dog = new Dog('Bruce')
  // dog.speakAnimal() // Also gets the method speak animal from Animal Class

  // If both had .speak the child method would take precedence

  // Cannnot extend regular objects (not made with 'class' syntax)



// ---- Super ----

// `super` keyword used to call ccorresponding mathods of parent class

class Cat {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} meaows`)
  }
}

class Lion extends Cat {
  speak() {
    super.speak() // Calls in the Cat (parent) speak method
    console.log(`And ${this.name} roars!`)
  }
}

// let lion = new Lion('Fluffy')
// lion.speak()


// ---- Mix-ins ----

// A class containing methods that can be used by other classes without a need to inherit from it.

// Make an object with useful methods, in that way we can easily merge them into any class prototype.

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`)
  },
  sayBye() {
    console.log(`Bye ${this.name}`)
  }
}

class UserMixin {
  constructor(name) {
    name = this.name
  }
}

Object.assign(User.prototype, sayHiMixin) // Mix the sayHiMixin object with the prototype of UserMixin

new User('victor').sayHi()







