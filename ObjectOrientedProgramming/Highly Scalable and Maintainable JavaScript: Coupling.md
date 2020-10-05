Study fom the article [How to Write Highly Scalable and Maintainable JavaScript: Coupling](https://medium.com/@alexcastrounis/how-to-write-highly-scalable-and-maintainable-javascript-coupling-c860787dbdd4)

## Coupling

When one module directly references another. One module knows about the other one.

Modules tightly coupled together can be hard to maintain. IN theory modules should be easily swapped.

Tightly coupled modules could result in a entire broken application, when only on part shouldn't be functioning.

## Patterns to Reduce Coupling

**Pub/Sub Pattern (Publish / Subscribe)**

A variation of the *observer pattern* 

Mediator object: Isolates the Publisher from the subscriber. 
Analogy: A flight control tower, planes don't communicate directly to each other, only the tower pass the information to the planes that need them.

- Library to implement the **Pub/Sub**: [PubSubJS](https://github.com/mroderick/PubSubJS)





