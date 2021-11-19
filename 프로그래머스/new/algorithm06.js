function boringBlackjack(cards) {
    // TODO: 여기에 코드를 작성합니다.
    let blackJack = [];
    let Len = cards.length
    let tmp = Array.from({length: 3}, ()=>0);

    //1. 3장을 뽑는 경우의 수(부분집합)를 구하는 helper function을 만든다.
    const DFS = (L, s) => {
        if(L===3) {
            blackJack.push(tmp.slice())
        } else {
            for(let i=s; i<Len; i++) {
                tmp[L]=cards[i]
                DFS(L+1, i+1)
            }
        }
    }

    DFS(0, 0)
    //2. 각각의 경우의 수의 합이 소수인지 확인한다.
    let newblackJack = blackJack.map(el => {
        return el.reduce((acc, cur) => acc = acc+cur)
    })

    // let count = 0;
    // for(let i = 0; i < newblackJack.length; i++) {
    //     if(newblackJack[i]%i !== 0) {
    //         count++;
    //     }
    // }
   
    // //3. 소수의 갯수를 count한다.
    // return count;
    console.log(newblackJack)
}

let output = boringBlackjack([2, 4, 6, 8, 14, 27]);
console.log(output); // 1

//숫자로 이루어진 카드를 여러 장 받는다
//3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인한다
//받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 된다.

// 즉 [1, 2, 3, 4] 중에
// 3장씩 카드를 고르는 경우의 수 

// [1, 2, 3] => 합 6
// [2, 3, 4] => 합 9
// [1, 3, 4] => 합 8
// [1, 2, 4] => 합 7

// [6, 7, 8, 9] 이 중에서 소수인 숫자를 확인한다.

// 소수의 개수가 많은 사람이 이기게 된다 
// 즉 소수의 개수를 return 해라
