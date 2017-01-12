# react-state-promise

instead of the idiot style callback from facebook, handle state setting with promises like this:

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
getNextState(this)

```

and
## willChange
```
willChange(this, {aStatePart: true})

```
