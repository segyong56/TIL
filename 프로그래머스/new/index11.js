// 완주하지 못한 선수

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion(완주자)의 길이는 participant(참석자)의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입력 ["leo", "kiki", "eden"]	["eden", "kiki"]	출력 "leo"
// 입력 ["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"] 출력	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

function solution (participant, completion) {

  // 완주하지 못한 선수 이름을 할당
  let answer = ""

  // 들어오는 정렬되어있지 않은 참가자 배열, 완주자배열 알파벳순대로 정렬한 후 
  let participants = participant.sort(); // length 1 더 많은 상황
  let completions = completion.sort();

  for(let i = 0; i < participants.length; i++) {
    if(participants[i] != completions[i]) {
      answer = participants[i]
      break;
    }
  }

  return answer; 


}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
const completion = ["josipa", "filipa", "marina", "nikola"]

console.log(solution(participant, completion))

  //참석자 명단 중 completion명단에 있지 않은 사람을 return하기 두번 비교하기 
    //완주한 명단에서 참가자 명단에서 두번 비교하기
    //completion의 길이는 무조건 participant의 길이보다 1작습니다. 5개 4개 