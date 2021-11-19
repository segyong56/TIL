function solution(record) {
    let answer = [];
    let newArr = record.map(user => user.split(" "))

    let obj = {}

    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i].length === 3) {
            obj[newArr[i][1]] = newArr[i][2]
        }
    }

    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i][0] === "Enter"){
            answer.push(`${obj[newArr[i][1]]}님이 들어오셨습니다.`)

        } else if (newArr[i][0] === "Leave"){
            answer.push(`${obj[newArr[i][1]]}님이 나가셨습니다.`)
        }
    }
    
    return answer;
}

let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"]

let output = solution(record)
console.log(output)