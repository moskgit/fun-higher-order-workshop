function add(a,b){
  return a+b;
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
const restd = once(add);
const result1 = restd(1,2);
const result2 = restd(3,4);
console.log(result1)
console.log(result2)