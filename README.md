# react-state-promise

instead of the idiot style callback from facebook, handle state setting with promises like this:


````
import setState from 'react-state-promise';

class YourComponent extends Component {

  test() {
    setState(this, {
        running: true,
      })
      .then(newState => faceCrap());
  }
}

````
