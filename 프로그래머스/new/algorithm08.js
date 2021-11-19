function gcd(m, n) {
    if (m % n === 0) return n;
    return gcd(n, m % n);
  }
  
  function divideChocolateStick(M, N) {
    
  
    let GCD = gcd(M, N)
    let arr = [];
  
    let s = Math.floor(Math.sqrt(GCD))
    for (let i = 0; i <= s; i++) {
      if (GCD % i === 0) {
        arr.push([i, M/i, N/i]);
        if(i*i < GCD) {
         let right = GCD/i
         arr.push([right, M/right, N/right])
        }
      }
    }
  console.log(GCD)
    return arr.sort((op1, op2) => op1[0]-op2[0]);
  }

let M = 20;
let N = 10;
let output = divideChocolateStick(M, N);
console.log(output);
