function test2 (n, m) {
    // TODO: 여기에 코드를 작성하세요.
    let number = [];
    for(let i = 1; i <= n; i++) {
      number.push(i)
    }

    let Len = number.length;
    let check = Array.from({ length: Len }, () => 0);
    let tmp = Array.from({ length: m }, () => 0);
  
    let barcode = []
    const DFS = (L) => {
        if (L === m) {
        let subset = tmp.slice()
         barcode.push(subset.join(""));
       } else {
         for (let i = 0; i < Len; i++) {
           if (check[i] === 0) {
             check[i] = 1;
             tmp[L] = number[i];
             DFS(L + 1);
             check[i] = 0;
           }
         }
       }
     };
   
     DFS(0);
   
    return barcode

}

const n = 3
const m = 2
const output = test2(n, m)
console.log(output)