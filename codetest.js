function add (num1, num2) {return num1+num2}
const obj = {
  invoke: add,
  revoke: function () {this.invoke = () => undefined}
} 

console.log(obj.invoke(3,4))
obj.revoke();
console.log(obj.invoke(1,2));


// const x = genSymF('A');
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// // console.log(x())
// // console.log(x())
// // console.log(x())
// // console.log(x())
// // console.log(x())
// // console.log(x())
// // console.log(x())