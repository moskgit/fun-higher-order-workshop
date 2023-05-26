function from(num) {
  return function generator(){
    return num++; 
  };
}
function to(gen, lim) {
  let startFrom = 0;
  return function limiter(){
    if(startFrom == 0){
      startFrom = gen(); 
      return startFrom;
    }else if(startFrom < --lim) {
      // console.log('startFrom: ', startFrom);
      const temp = gen();
      // console.log('temp: ', temp);
      return temp;
    }
  }
}
const x = to(from(1),3);
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());



// function to(generator, limit) {
//   let upto = limit - 1;
//   let callCount = 0;
//   let startFrom = 0;
//   return function restrictedFunc(){
//     if(callCount === 0) {
//       startFrom = generator();
//       callCount++;
//       return startFrom;
//     }
//     if(upto-- > startFrom){
//       callCount++;
//       let num = generator();
//       return num--;
//     }
//   }
// }

// const x = to(from(0), 6);

// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())

// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())


// function fromTo(num1, num2) {
//   let upto = num2 -1;
//   return function generator(){
//       if(num1++ < upto) return num1; 
//   };
// }
// const x = fromTo(10,20);
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())