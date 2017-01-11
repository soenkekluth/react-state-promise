# react-state-promise

instead of the idiot style callback from facebook, hanle state setting with promises like this:


````
setState(this, {
  running: true,
})
.then(newState => faceCrap())
````
