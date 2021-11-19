/*
한 행씩 내려올 때, 같은 열을 연속해서 밞을 수 없는 특수 규칙이 있다.
마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return 

1 2 3 5 
5 6 7 8 
4 3 2 1 

5의 좌표는 [0, 3]
7의 좌표는 [1, 2]
4의 좌표는 [2, 0]
[x, y] x는 +=1, y는 전에 좌표의 y의 위치와 다른 것 중 가장 큰 수를 찾아내야한다.

현재 위치를 항상 파악하고 
현재위치의 col과 같지 않게 해야한다.
그리고 그중에 가장 큰수 옮겨야 한다.
1235
5678
4321

1235 3
5678 2
1234 3 
1234 2
1234 3
*/

function solution(land) {
    var answer = 0;
    var len = land.length;
    
    for(var i =len-2; i>=0; i--){
      land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
      land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
      land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
      land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
   }
   answer = Math.max(...land[0]); /***포인트!!***/
  
  
      return answer;
}

let land = [
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];

let output = solution(land);
console.log(output);
