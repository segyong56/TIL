function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.

  let recipe = [];

 
  let newRecipe = stuffArr.filter(el => {
      let str = String(el)
      let count = 0;
      for(let a of str) {
          if(a === "0") {
              count+=1
          }
      }
      if(count < 3) {
        return el
      }
  })
  
  if(newRecipe.length < choiceNum) {
      return [];
  }

  newRecipe.sort((a,b) => a-b)
  let Len = newRecipe.length;

  let check = Array.from({ length: Len }, () => 0);
  
  let tmp = Array.from({ length: choiceNum }, () => 0);

  const DFS = (L) => {
     if (L === choiceNum) {
      recipe.push(tmp.slice());
    } else {
      for (let i = 0; i < Len; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp[L] = newRecipe[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0);
 
  return recipe;
  
}

const output3 = newChickenRecipe([11, 1, 10, 1111111111, 10000], 4);
console.log(output3);

