function solution(n) {
  let twoComplement = n.toString(2);
  let count = 0;

  for (let x of twoComplement) {
    if (x === "1") {
      count++;
    }
  }
  /*

   78보다 큰 숫자 중 이진법으로 변환을 했을 때 1의 갯수가 같다
   78 => 1001110 type = string
   2진법을 구하는 방법 
   1*2^6 + 0*2^5 + 0*2^4 + 1*2^3 + 1^2^2 
   64+8+4+2=78


   */
  let result = 0;
  const findNextNum = (num) => {
    let str = num.toString(2);
    let c = 0;

    for (let x of str) {
      if (x === "1") {
        c += 1;
      }
    }

    if (c === count) {
      result = num;
      return;
    } else {
      findNextNum(num + 1);
    }
  };

  findNextNum(n + 1);

  return result;
}

let n = 78;
let output = solution(n);
console.log(output);
