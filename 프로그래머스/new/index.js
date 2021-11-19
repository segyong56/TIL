function fibonacci(n) {
    if(n < 2) {
      return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
  }
  
function test1() {
    // TODO: 여기에 코드를 작성하세요.
    let count = 0;
  
    return function () {
        count++;
       return fibonacci(count-1)
    }
   
}


const fn = test1();
console.log(fn()); // --> 0
console.log(fn()); // --> 1
console.log(fn()); // --> 1
// console.log(fn()); // --> 2
// console.log(fn()); // --> 3
// console.log(fn()); // --> 5