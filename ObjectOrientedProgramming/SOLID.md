# SOLID

1. **S – Single Responsibility Principle**
2. **O – Open-Closed Principle**
3. **L – Liskov Substitution Principle**
4. **I – Interface Segregation Principle**
5. **D – Dependency Inversion Principle**

## 1 - Single responsibility principle

States that a class, object or model should only have one responsibility.

The goal is to make the code easier to refactor.

Example:
- Separate main application logic from DOM manipulation.

```javascript
function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    const gameOverDiv = document.createElement('div')
    gameOverDiv.classList.add('game-over')
    gameOverDiv.textContent = `${this.winner} won the game!`
    document.body.appendChild(gameOverDiv)
  }
}

// Instead we should have

function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    DOMStuff.gameOver(this.winner)
  }
}
```

### Defining single responsibility:

**Object Role Stereotypes:**

Pre established roles that commonly occurs across object-oriented architectures.

Defines a set of *templates* in which developers can use while decomposing application behaviors into components.

Concept discussed in the book [Object Design: Roles, Responsibilies, and Collaborations](http://www.amazon.com/Object-Design-Roles-Responsibilities-Collaborations/dp/0201379430)

It present the ***following stereotypes***:

- *Information holder:* Object designer to know certain information and provide that information to another objects.

- *Structurer:* Maintains relationships between objects and information about those relationships.

- *Service provider:* Performs and specific work and offers services to other objects that demand them.

- *Controller:* Object designed to make decisions and control a *complex task*.

- *Coordinator:*  Don't make decisions, but delegates work to other objects.

- *Interfacer:* Transforms information or requests between different parts of the system.

## 2 - Open-Closed Principle

Means our JS modules should be open to extension, but closed to modification.

Rule of thumb. If you NEED to open the module file to modify it's behavior, you failed this principle.

Example:

```javascript
let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
};
export default iceCreamMaker;

// You can't add Ice Cream Flavors without opening the file and manually altering the array.

let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
  },
};
export default iceCreamMaker;

// You can use the addFlavor() to insert new flavors into the array.
```

## 3 - Liskov Substitution Principle

How something sounds right in natural language doesn't quite work in code.

Even thought  a square is a rectangle, in code we shouldn't inherit a a square into a rectangle.

A rectangle has a set width and set height, this makes no sense for the inherited square.

## 4 - Interface Segregation






