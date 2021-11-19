
function solution (number, k) {

    let numberArr = number.split("")
    let N = numberArr.length-k
    let tmp = Array.from({length:N}, () => 0)
    let answer = []

    const DFS = (L, s) => {
        if(L===N) {
            let copy = tmp.slice()
            answer.push(Number(copy.join("")))
        } else {
            for(let i=s; i<numberArr.length; i++) {
                tmp[L]=numberArr[i]
                DFS(L+1, i+1)
            }
        }
    }

    DFS(0, 0)

    let max = Math.max(...answer)

    return String(max)
}

let number = "1231234"
let k = 3
let output = solution(number, k)
console.log(output)