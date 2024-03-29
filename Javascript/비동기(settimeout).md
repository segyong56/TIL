

# 비동기 처리
비동기 처리방식인 callback과 promise에 대해서 설명해보도록 하겠습니다.

먼저, 동기와 비동기 처리방식 무엇인지에 대해서 먼저 알아보도록 하겠습니다.

`동기적 처리란`, 요청이 온 순대로 응답을 보내고 다음 요청은 응답이 끝난 후에 요청을 받고, 응답을 보낼 수 있습니다. 
동기와 비동기를 설명할 때 제일 많이 쓰는 예가 커피숍에서 커피주문와 커피가 완료 되었을때를 예를 가장 많이 듭니다. 
동기는 커피주문을 하고 커피가 나올 다음 다음 사람의 주문을 받을 수 있고
비동기는 커피 주문을 계속 받고, 커피가 준비되는대로 손님에게 커피를 전달 하는 형식을 말합니다.

동기를 하는 이유는 자바스크립트 기본적으로 동기적으로 즉, 코드작성순대로 코드가 실행이 됩니다.
작성순대로 코드가 실행이 되는 것이 기본적인대 이럴경우 blocking 현상 나타납니다. 즉, 작업 중단된다는 말인대 만약 동기적으로 서버와 통신을 했을 때 서버에서 요청을 보내고 응답을 받을 때까지 다른 task는 중단된 상태에서 일을 하지 않습니다. 

이때 보완하는 것으로 이런 작업중단현상을 방지하기 위한 `비동기처리`를 하게 됩니다. 
`비동기처리`는, 요청이 온 순 대로가 아닌 요청 완료처리된 순서대로 응답을 처리한다. 즉 요청을 우선은 다 받은 후 응답이 온 순서대로 응답을 처리해주면 되는 것인대, 

비동기적 처리에 대표적인 예로 settimeout이 있습니다.
이렇게 어떤 함수를 실행을 지연시키고, 요청을 하고, 응답받고, 어떤 이벤트가 일어났을 때 함수를 실행하는 이러한 처리를 비동기적 처리라고 합니다. 


```js


var sleep = (time) => {
    var stime = Date.now();
    var etime = stime + time;

    console.log('start sleep:', time);

    while (true) {
        if (etime < Date.now()) {
            console.log('end sleep:', time);
            return;
        }
    }
}

setTimeout(() => sleep(10000));
setTimeout(() => sleep(20000));
```

```js

✏️ 결과값
start sleep: 10000 VM334:9 
end sleep: 10000 VM334:5 
start sleep: 20000 VM334:9 
end sleep: 20000 VM334:5 

```
