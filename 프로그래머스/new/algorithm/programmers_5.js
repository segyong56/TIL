function solution(files) {
    var answer = [];
    files.sort()
    /*
    문자열 순서대로 그다음 문자가 같은 경우 숫자순서대로 정열한다.
    먼저 문자열대로 정렬한 후
    숫자대로 정렬한다.

    img12.png 
    files[0] => img12.png 문자열
    img 
    12
    .png 3개로 나누어 생각을 해야한다.

    F-5 Freedom Fighter
    F-
    5
    Freedom Fighter
    */

   for(let i = 0; i < files.length; i++) {
       
      
            console.log(files[i][0])
        
   }
    return answer;
}

let files = [
    "F-5 Freedom Fighter", 
    "B-50 Superfortress", 
    "A-10 Thunderbolt II", 
    "F-14 Tomcat"
]

let output = solution(files)
console.log(output)