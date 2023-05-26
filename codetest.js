// function add(a,b){
//   return a+b;
// }
// function mul (a, b) {
//   return a * b
// }
// // function once(func){
// //   let restrictedTo = 1;
// //   let result = 0;
// //   return function restrictedFunc(a, b){
// //     if(restrictedTo-- > 0) {
// //       result = func(a,b);
// //       return result; 
// //     } 
// //     return result;
// //   };
// // }
// // const restd = once(add);
// // const result1 = restd(1,2);
// // const result2 = restd(3,4);
// // console.log(result1)
// // console.log(result2)



// function twice(func) {
//   let restrictedTo = 2;
//   let result = 0
//   return function restrictedFunc(a) {
//     if (restrictedTo-- > 0) {
//       result = func(a, a)
//       return result
//     }
//     console.log("result: ", result)
//     return result
//   }
// }

// const test = twice(mul)
// const firstTest = test(11)
// // const secondTest = test(4)
// console.log("firstTest: ", firstTest)

function composeU(func1, func2) {
  return function funcOneArg(num1, num2, num3){
    return func2(func1(num1, num2), num3);
  }
}