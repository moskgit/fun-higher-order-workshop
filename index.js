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
  return ++num;
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

function from(num) {
  return function generator(){
      return num++; 
  };
}

function to(generator, limit) {
  let start = 0;
  return function limiterFunc(){
    if(start == 0){
      start = generator(); 
      return start;
    }else if(start < --limit) {
      return generator();
    }
  }
}

function fromTo(num1, num2) {
  return function generator(){
      if(num1 < num2) return num1++; 
  };
}

function element (arr, gen) {
  let start = 0;
  if(typeof gen !== 'function')
    gen = fromTo(0, arr.length);
  
  let arrLen = arr.length - 1;
  return function generator() {
    if(start == 0){
      start = gen(); 
      return arr[start];
    }else if(start < arrLen--) 
      return arr[gen()];
  }
}

function collect(gen, arr) {
  return function collector(){
    const value = gen();
    arr.push(value);
    return value;
  }
}

function filter(gen, predicate){
  return function (){ //annonymous from this poin onwards.
    if(predicate === 'alwaysTrue')
      return gen();
    if(predicate === 'alwaysFalse') 
      return undefined;
    else{
      const val = gen();
      if(predicate(val))
        return val;
      else
        return undefined;
    }
  }
}

function concat(gen1, gen2) {
  return function () {
    const valOfGen1 = gen1();
    if(valOfGen1 !== undefined)
      return valOfGen1;
    else if(typeof gen2 === 'function')
      return gen2();
  }
}

function fibonacciF(first, second) {
  let callCount = 0;
  return function () {
    callCount++;
    if(callCount === 1) return first;
    if(callCount === 2) return second;
    if(callCount === 3) return result = first + second;
    first = second;
    second = result;
    return result = first + second;
  }
}

function genSymF(char) {
  const gen = from(0);
  return function () {
    return char + gen();
  }
}

function genSymFF(func, seed) {
  return function (char){
    let copyseed = seed;
    return function(){
      copyseed = func(copyseed);
      return char + copyseed;
    }
  };
}

// Object Methods :
function counter(num) {
  const countObj = {
    up : () => ++num, 
    down : () => --num
  }
  return countObj;
}

function revokable(binFunc) {
  const obj = {
    invoke: binFunc,
    //made a failed attemp to find and use some in-built method/machanism or something to revoke. This - the following. Please let me know if it's in your knowledge.
    revoke: function () {this.invoke = () => undefined}
  } 
  return obj;
}

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
