export const setLoggerForFunc = method => {
  return new Proxy(method, {
    apply: (func, thisArg, funcArguments) => {
      console.log('+++++++++++++++++');
      console.log('The function was called with arguments:');
      funcArguments.forEach(arg => console.dir(arg));
      console.log('+++++++++++++++++');
      return func(...funcArguments);
    }
  });
};

export const setLoggerForSetProps = targetObj => {
  return new Proxy(targetObj, {
    set: (target, key, val) => {
      console.log('=======================');
      console.log('The value:');
      console.dir(val);
      console.log(`was set for key: ${key}`);
      console.log('=======================');
      target[key] = val;
      return target;
    }
  });
};
