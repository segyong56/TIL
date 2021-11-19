function subPowerSet(str) {
  let answer = [];
  let Len = str.length;
  let check = Array.from({ length: Len }, () => false);

  const DFS = (L) => {
    if (L === Len) {
      let path = [];
      for (let i = 0; i < Len; i++) {
        if (check[i] === true) {
          path.push(str[i]);
        }
      }
      answer.push(path.join(""));
    } else {
      check[L] = true;
      DFS(L + 1);
      check[L] = false;
      DFS(L + 1);
    }
  };

  DFS(0);

  return answer;
}
//부분집합을 구한 후 => 같은 부분 집합이 있는 지 확인한다.

const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.

  let str1Arr = subPowerSet(str1);
  let str2Arr = subPowerSet(str2);

  let count = 0;
  for (let i = 0; i < str2Arr.length; i++) {
    if (str2Arr[i].length > 1) {
      if (str1Arr.includes(str2Arr[i])) {
        count += 1;
      }
    }
  }
  console.log(str1Arr);
  console.log(str2Arr);

  return count;
};

let str1 = "abcd";
let str2 = "bced";

let output = LCS('acaykp', 'capcak');
console.log(output);
