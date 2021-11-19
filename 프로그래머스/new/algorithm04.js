
function solution(sideDishes) {
  let answer = [];
  let Len = sideDishes.length
  let check = Array.from({length:Len}, ()=>false)

  const DFS = (L) => {
    if(L===Len) {
      let path = [];
      for(let i=0; i<Len;i++){
        if(check[i]===true) {
          path.push(sideDishes[i])
        }
      }
      answer.push(path.sort())
    } else {
      check[L]=true
      DFS(L+1)
      check[L]=false
      DFS(L+1)
    }
  }

  DFS(0);

  console.log(answer.sort())
}

let output = solution(["eggroll", "kimchi", "fishSoup"]);
console.log(output);