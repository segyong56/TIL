function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    // 자기 위치의 변화했을 때는 값을 더하지 않는다.
  
    let move = { 
        L: [0, -1], 
        R: [0, 1], 
        U: [-1, 0], 
        D: [1, 0] 
    };
    let now = [0, 0];
    let route = [];
    let check = new Set();
  
    for(let dir of operation) {
        
        let nextX = now[0] + move[dir][0] // up 혹은 down
        let nextY = now[1] + move[dir][1] // right 혹은 left
          
        if(nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board.length) continue;
          
          //let nowStr = now.join("")
          route.push([nextX, nextY])
       
          check.add(`${nextX}${nextY}`)
          now[0] = nextX
          now[1] = nextY
          
      }

      console.log(check)
      let sum = 0;
      let arr = [...check]

      for(let i = 0; i < arr.length; i++) {
          let ARR = arr[i].split("")
          sum+=board[Number(ARR[0])][Number(ARR[1])]
      }
   
      
      return sum

  };
  
  const board2 = [
    [567, 6734, 132],
    [789, 243, 6],
    [89, 33333, 0]
  ]
  const output2 = boardGame(board2, 'UUUDD')
  console.log(output2);