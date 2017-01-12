import assign from 'object-assign';
import { shallowEqual } from './shallowCompare';

const instanceMap = {};

const setState = (instance, nextState) => {
  if (instanceMap[instance]) {
    instanceMap[instance].nextState = assign({}, instanceMap[instance].nextState, nextState);
    instance.setState(nextState, instanceMap[instance].resolver);
    return instanceMap[instance].promise;
  }

  const lastState = instance.state;
  let promiseResolver;
  const promise = new Promise((resolve) => {
    promiseResolver = resolve;
  })
  .then((state) => {
    delete instanceMap[instance];
    return { state, lastState };
  });

  const resolver = () => {
    promiseResolver(instance.state);
  };

  instanceMap[instance] = {
    nextState,
    promise,
    resolver,
  };

  instance.setState(nextState, instanceMap[instance].resolver);
  return instanceMap[instance].promise;
};


export const getNextState = (instance) => {
  if (instanceMap[instance]) {
    return instanceMap[instance].nextState;
  }
  return instance.state;
};

export const willChange = (instance, state) => {
  if (instanceMap[instance]) {
    return shallowEqual(instanceMap[instance].nextState, state);
  }
  return !shallowEqual(instance.state, state);
};


export default setState;
