function solution(dirs) {
  let check = new Set();
  let x = 0,
    y = 0;

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "U" && y < 5) {
      check.add({x, y});
      y += 1;
    } else if (dirs[i] === "D" && y > -5) {
      check.add({x, y});
      y -= 1;
    } else if (dirs[i] === "R" && x < 5) {
      check.add((x, y), (x + 1, y));
      x += 1;
    } else if (dirs[i] === "L" && x > -5) {
      check.add((x - 1, y), (x, y));
      x -= 1;
    }
  }

  return check;
}

// let dirs = "ULURRDLLU"
let dirs = "ULURRDLLU";
let output = solution(dirs);

console.log(output);
