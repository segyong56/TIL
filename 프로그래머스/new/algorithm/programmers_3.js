function solution (A, B) {

    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)

    let newArr = A.map((el,idx) => {
        return el = el*B[idx]
    })

    let sum = newArr.reduce((acc, cur) => acc = acc+cur)
    return sum
}

let A = [1, 2]
let B = [3, 4]

let output = solution(A, B)
console.log(output)