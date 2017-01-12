const hasOwn = Object.prototype.hasOwnProperty;

export const shallowEqual = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  if ((!objA && !!objB) || (!!objA && !objB)) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0, l = keysA.length; i < l; i++) {
    if (!hasOwn.call(objB, keysA[i])) {
      return false;
    } else if (!(typeof objA[keysA[i]] === 'function' && typeof objB[keysA[i]] === 'function')) {
      if (objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  }

  return true;
};

export const shallowCompareProps = (instance, nextProps) => !shallowEqual(instance.props, nextProps);

export const shallowCompareState = (instance, nextState) => !shallowEqual(instance.state, nextState);

export const shallowCompare = (instance, nextProps, nextState) => (
    !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState)
  );

export default shallowCompare;
