
// function solution (string) {

//   const sqrt = Math.floor(string.length / 2)
//   const frontStr = string.slice(0, sqrt)
//   const backStr = string.slice(sqrt+1, string.length)
  
//   let result = true;

//   for(let i = 0, j = sqrt-1; i < sqrt; i++, j--) {

//     if(frontStr[i] !== backStr[j]) {
//       result = false
//     } 

//   }

//   return result;
  
// }



// const str = "토마토맛토마토";
// console.log(solution(str))


function solution (N) {

  if(N === 0 || N === 1 || N === 2) {
    return true
  }
  
  // 2로 나누어 떨어진다면  2의 배수가 된다. 즉, 소수가 아니다 
  if(N % 2 === 0) {
    return false
  }

  for(let i = 3; i < N; i++) {
    if(N % i === 0) {
      return false
    }
  }

  return true
  
}



const N = 9;
console.log(solution(N))
