function solution(board) {
   
    
    //1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return하는 solution함수를 완성
    //표는 2차원 배열로 주어진다.
    //1와 0으로 채워진 표(board)로 이루어져 있다.
    //정사각형이기 때문에 3x3, 4x4, 
    //무조건 column = 4 배열이다.

    let n = board.length
    let newBoard = Array.from(Array(n), () => Array())
    let totalSum = 0;
    // board[j][i] 값 중에서 0인 값을 다 지우고 새로운 배열을 생성한다.
   for(let j = 0; j < board.length; j++) {
        for(let i = 0; i < board[j].length; i++) {
            if(board[j][i] === 1) {
                newBoard[j].push(1)
                totalSum+=1;
            }
        }
    }

    let obj = {}
    newBoard.forEach(arr => {
        if(obj[arr.length]) {
           obj[arr.length]+=1; 
        } else {
            obj[arr.length] = 1
        }
        
    })
    console.log(obj)
}

let board = [
    [0,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [0,0,1,0],
]

let output = solution(board)

console.log(output)


//     // 행이 3개인경우 총 합이 9(n^2)이상 16((n+1)^2)이하인경우는 최대가 3x3이 최대이고
//     // 행이 2개인경우 
// nxn <= totalSum && totalSum <= (n+1)*(n+1)
// return nxn
// let board = [
//     [1,1,1,1],
//     [1,1,1,1] 
// ]
// 3^2 < totalSum 12 < 4^2 return 3^2 
// 2^2 < totalSum 8 < 3^2 return 2^2
// let board = [
//     [1,1,1,1], 4
//     [1,1] 2
// ]

// 정사각형이 되는 경우 
// [1] 1

// [1, 1], 
// [1, 1] 4 

// [1, 1, 1]
// [1, 1, 1]
// [1, 1, 1] 9 


// [1, 1, 1, 1]
// [1, 1, 1, 1]
// [1, 1, 1, 1]
// [1, 1, 1, 1] 16 


