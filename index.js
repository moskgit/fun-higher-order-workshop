function identity(input) {
  return input;
}

function identityF(arg) {
  function nestedFunc() {
    return arg;
  }
  return nestedFunc;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function increment(num) {
  return add(num, 1);
}

function addF(num1) {
  return function (num2) {
    return add(num1, num2);
  };
}

function curry(func, num1) {
  return function (num2) {
    return func(num1, num2);
  };
}

function liftF(func) {
  return function (num1) {
    return curry (func, num1);
  };
}

function once(func){
  let restrictedTo = 1;
  let result = 0;
  return function restrictedFunc(a, b){
    if(restrictedTo-- > 0) {
      result = func(a,b);
      return result; 
    } 
    return result;
  };
}
function twice(func) {
  let restrictedTo = 2;
  let result = 0
  return function restrictedFunc(a) {
    if (restrictedTo-- > 0) {
      result = func(a, a)
      return result
    }
    // console.log("result: ", result)
    return result
  }
}

function composeU(func1, func2) {
  return function oneArg(num){
    return func2(func1(num));
  }
}

function composeB(func1, func2) {
  return function funcOneArg(num1, num2, num3){
    return func2(func1(num1, num2), num3);
  }
}

function limit(func, num){
  let restrictedTo = num;
  let result = 0;
  return function restrictedFunc(a, b){
    if(restrictedTo-- > 0) {
      result = func(a,b);
      return result; 
    } 
  };
}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  once,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
