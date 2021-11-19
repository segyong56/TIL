function solution(people, limit) {
  people.sort();

  let totalSum = 0;
  let currentPerson = people.shift();
  let count = 0;
  totalSum+=currentPerson;
  count+=1;

  while (people.length > 0) {
    
    currentPerson = people.shift();
    if (totalSum + currentPerson <= limit) {
      totalSum+=currentPerson
      
    } else {
      totalSum = 0;
      count++;
    }
 
  }

  return count;
}

let people = [70, 80, 50, 50];
let limit = 100;

let output = solution(people, limit);
console.log(output);
