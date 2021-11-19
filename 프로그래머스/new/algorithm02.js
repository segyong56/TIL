function partTimeJob(k) {

    let coins = [500, 100, 50, 10, 5, 1];
    let obj = {}

    const returnCount = (coins, k) => {

        let coin = coins[0]
        let tail = coins.slice(1)

        let count = 0;
        if(coins.length === 0) {
            return obj;
        }

        for(let i = coin; i <= k; i+=coin) {
            count+=1;
        }

        obj[coin] = count
        return returnCount(tail, k-(coin*count));
    
    }

    returnCount(coins, k)

    // 제일 먼저 500원으로 계산을 한 후 남은 가격을 그 다음 작은 단위의 동전으로 계산하면서 count를 한다.
    console.log(obj)
    let result = 0;
    for(let key in obj) {
        result+=obj[key]
    }
    
    return result;
}

const output = partTimeJob(4000);
console.log(output)