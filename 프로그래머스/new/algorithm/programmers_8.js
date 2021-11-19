/* 
카펫

10 2 => [4, 3] 10+2 = 12
8 1 => [3, 3] 8+1 = 9
24 24 => [8, 6] 24+24 = 48

12
9
48
 
우선 행의 갯수는 3개 이상이 되어야 한다

8 8*3 6*4
2 6
2 6
2 6
2 6
8

12 => 4*3
9 => 3*3
48 => 8*6
2 24 16 3 12 4 8 6 

24 16 12 8 6 3 2 
12 9 48 
*/

function solution(cacheSize, cities) {
  
    let str = cities.join("")

    console.log(str.length)
}

let cacheSize = 3;
let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

let output = solution(cacheSize, cities);
console.log(output);
