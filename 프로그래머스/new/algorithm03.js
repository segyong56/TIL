//말이 보드 밖으로 나갔다면 즉시 out을 반환하며

//board의 방향키에 따라 움직였을 때 1이 있을 경우 점수를 획득한다.
// 방문한 곳을 또 방문해도 숫자를 획득 할 수 있다.
//방향은 Up, Down, Right, Left 이렇게 있다.

//(x, y)을 기준으로 첫 시작은 [0(row), 0(column)] row 줄 col 열
// Up = y+=1
// Down = y-=1
// Right = x+=1
// Left = y-=1

//만약에 x > board.length || y > board[0].length return out을 반환한다.

function boardGame(board, dirs) {
  let score = 0;
  let x = 0;
  let y = 0;
  let path = [];

  for (let dir of dirs) {
    if (x > board.length || y > board[0].length || x < 0 || y < 0) {
      return "OUT";
    }

    if (dir === "U") {
      x -= 1;
      path.push([x, y]);
    } else if (dir === "D") {
      x += 1;
      path.push([x, y]);
    } else if (dir === "R") {
      y += 1;
      path.push([x, y]);
    } else if (dir === "L") {
      y -= 1;
      path.push([x, y]);
    }
  }

  for (let [a, b] of path) {
    if (board[a][b] === 1) {
      score += 1;
    }
  }
  console.log(path);
  return score;
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];

const output1 = boardGame(board1, "RRDLLD");
console.log(output1);

// [0,1] [0,2] [1,2] [1,1] [1,0] [2, 0]
