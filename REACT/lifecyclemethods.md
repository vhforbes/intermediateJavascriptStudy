# Lifecycle Methods

!Important Topic!

Methods used to operate on components during their duration in the DOM.

## Existent mount methods:

- Render

Only obligatory method. Called every time a component mounts or updates.

I always reads `this.props && this.state` to check for the component data.

Should be PURE, not modifying the component state. Should not interact directly with the browser.


- ComponentDidMount

Method is run when component is mounted. When it's inserted in the DOM tree.

Commonly used to:
Connect to web APIs or JS Frameworks
Set Timers using setTimeout or setInterval
Add event listeners

- ComponentDidUpdate

Called any other time that the component updates. 

- ComponentWillUnmount 

Last lifecycle method. Called when component is removed from the DOM.

Commonly used to:
Remove event listeners
Cancelling network requests
Other cleanup routines

