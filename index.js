const instanceMap = {};

const setState = (instance, nextState) => {
  if (instanceMap[instance]) {
    instance.setState(nextState, instanceMap[instance].resolver);
    return instanceMap[instance].promise;
  }

  let promiseResolver;
  const promise = new Promise((resolve) => {
    promiseResolver = resolve;
  })
  .then((state) => {
    delete instanceMap[instance];
    return state;
  });

  const resolver = () => {
    promiseResolver(instance.state);
  };

  instanceMap[instance] = {
    promise,
    resolver,
  };

  instance.setState(nextState, instanceMap[instance].resolver);
  return instanceMap[instance].promise;
};

export default setState;
