function solution(n, words) {
  let answer = [];
  let alreadySpeaked = [words[0]];

  
  for (let i = 0; i < words.length; i++) {
    if (words[i + 1] === undefined) {
      break;
    } else if (
      words[i][words[i].length - 1] !== words[i + 1][0] ||
      alreadySpeaked.includes(words[i + 1])
    ) {
      let turn = parseInt(i/n) + 1
      let player = (i+1) % n + 1
      answer.push(turn, player);
    } else {
      alreadySpeaked.push(words[i+1]);
    }
  }

  

  return answer;
}

let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
let n = 3;

let output = solution(n, words);
console.log(output);
