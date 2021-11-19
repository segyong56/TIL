function solution(relation) {
  /**
   * 후보키 찾기
   * 정확한 정보를 찾아내기위한 후보기를 찾기
   * 100 ryan music 2
   *
   * 학생.학번 = 100 findOne
   * 학생.이름 = ryan findOne
   * 학생.이름 && 학생.전공
   */

  let table = [];
  let answer = [];
  let Len = relation[0].length;
  let check = Array.from({ length: Len }, () => false);

  for (let i = 0; i < relation.length; i++) {
    let obj = {};
    for (let j = 0; j < relation[i].length; j++) {
      obj[`col${j}`] = relation[i][j];
    }
    table.push(obj);
  }

  const DFS = (L) => {
    if (L === Len) {
      let path = [];
      for (let i = 0; i < Len; i++) {
        if (check[i] === true) {
          path.push(`col${i}`);
        }
      }
      answer.push(path.sort());
    } else {
      check[L] = true;
      DFS(L + 1);
      check[L] = false;
      DFS(L + 1);
    }
  };

  DFS(0);

  /**
   * 후보의 키가 될 수 있는 경우의 수를 찾고
   * 경우의 수의 key에 따라 col0 && col1
   * 1개 일때 2개일때 3개일때
   * 1개 일떄는 ?
   */

  const findOne = (arr) => {
    //arr = [col0, col1, col2]

    let result = new Set()

    for (let i = 0; i < arr.length; i++) {
      table.forEach((obj) => {
         let str = ""; 
        for (let key in obj) {
          
          if(key === arr[i]) {
              str+=obj[key]
          }
          console.log(str)
        }
        result.add(str)
      });
    }
    // console.log(result);
    return result;
  };

  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    let subKey = findOne(answer[i]);
  }

  return count;
  //   console.log(answer);
}

let relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

const output = solution(relation);

console.log(output);
