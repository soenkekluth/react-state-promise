# react-state-promise

[![Greenkeeper badge](https://badges.greenkeeper.io/soenkekluth/react-state-promise.svg)](https://greenkeeper.io/)

get a Promise from setState instead of using the idiot callback from facebook!

## setState

````
import setState from 'react-state-promise';

class YourComponent extends Component {

  test() {
    setState(this, {
        running: true,
      })
      .then(({state, lastState}) => {
        if(state.running && !lastState.running) { .... }
      });
  }


  easy() {
    setState(this, {
        easy: true,
      })
      .then(() => {
        ......
      });
  }
}

````

you can also :

## getNextState

```
import { getNextState } from 'react-state-promise';
....

getNextState(this)

```

and

## willChange

```
import { willChange } from 'react-state-promise';
....

willChange(this, {aStatePart: true})

```
