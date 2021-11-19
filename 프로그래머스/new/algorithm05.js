function rockPaperScissors (m) {
    // TODO: 여기에 코드를 작성합니다.

    let arr = ['rock', 'paper', 'scissors']

     //n=arr.length; m=1
     let answer = [];
     let N = arr.length;
     let M = m
     let tmp = Array.from({length:M}, ()=>0)
     
     function DFS(L) {
         if(L===M) {
             answer.push(tmp.slice())
         } else {
             for(let i = 0; i < N; i++) {
                 tmp[L]=arr[i]
                 DFS(L+1)
             }
         }
     }

     DFS(0)
     return answer
  };

  
  
let output = rockPaperScissors(5);

console.log(output);