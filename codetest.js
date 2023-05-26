function add(num1, num2) {
  return num1 + num2;
}

function liftF(func) {
  return function (num1) {
    return function (num2) {
      return func(num1, num2);
    };
  };
}

const addF = liftF(add);
const add3 = addF(3);
const result = add3(4);
console.log(result);
// const firstReturn = addTest(1);
// console.log("firstReturn: ", firstReturn)
// const secondReturn = addTest(2);

// console.log("secondReturn: ", secondReturn);
