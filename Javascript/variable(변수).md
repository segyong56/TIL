

### 1. global variable(전역변수)

전역블록스코프(window)에 선언된 변수를 전역변수라고 한다.
전역변수는 어느누구든 접근가능하다. 
전역변수의 경우 어느 누구든 접근이 가능하기도 하고 어플리케이션이 실행하고 끝날 때까지 변수가 선언된상태이기 때문에 항상 메모리가 탑재된 상태이기 때문에 전연변수를 남용하게 된다면 그만큼 메모리 낭비가 되는 것이며 성능적으로 좋지 못하다.

```js

let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

```
### 2. local variable(지역변수)
 
블록스코프안에 선언된 변수를 지역변수라고 한다.
예를 들면, 선언된 함수 안에 선언된 변수를 지역변수라고 하며, 선언된 함수안의 코드내에서 지역변수를 사용가능하지만, 스코프를 벗어난 경우에는 스코프안에 변수는 접근 가능하지 않다.



### 3. block scope (블록스코프)

{} 중괄호로 묶어 놓은 것을 블록 스코프라고 하며 블록스코프안에 선언된 변수와 변수에 할당된 값은 블록스코프안에서만 접근이 가능하다. 


### 4. let, const

☝️ let

mutable한 값을 변수에 할당할 때 쓰는 변수 키워드이다, 즉 할당된 값이 어떠한 조건에 의해 변경을 해야하는 경우 쓰여진다.

☝️ const

immuable한 값을 변수에 할당할 때 쓰는 변수 키워드이다. 할당된 값이 어떠한 조건에도 변경이 되어서는 안되는 경우에 쓰여진다.

* let을 사용하여 변수를 선언하였을 때 발생할 수 있는 에러

💡 Note!
 Immutable data types: premitive types, frozen objects (i.e. object.freeze())
 Mutable data types: all objects by default are mutable in JS
 favor immutable data type always for a few reasons:
 - security
 - thread safety
 - reduce human mistakes

```js

// 5. Dynamic typing: dynamically typed language 
// let으로 선언하여 값을 할당한 경우에 생길 수 있는 에러
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

```

### 5. var 

재선언, 재할당이 가능한 변수키워드이다. var로 선언된 변수의 경우 hoisting이 일어나 선언된 위치에 상관없이 어느 곳에서 호출하여도 에러가 나지 않으며, undefined(값이 없는상태)로 출력이 되어진다.
그리고 var로 선언된 변수는 블록스코프를 무시한다.

블록스코프에 var로 선언된 변수의 값을 블록스코프 밖에서 호출했을 경우에도 에러가 나지않는다.

이렇게 var키워드를 남용하게 된다면, 언제든 할당된 값이 바꿀수 있다는 점과 지역변수를 전역으로 사용이 되어진다는 점, 또한 선언된 위치와 상관없이 호출이 되어진다는 부분에서 코드의 많은 문제점이 발생하게 된다.

<img width="742" alt="스크린샷 2021-11-19 오후 3 51 55" src="https://user-images.githubusercontent.com/80687195/142585010-8eb7334a-8c3d-4dc9-9804-72405e60ccbd.png">


### 6. hoisting

선언된 시점을 무시하고 코드가 최상단으로 끌어올려지는 것을 말한다.
자바스크립트의 특성상 선언된 함수, var키워드는 선언된 시점을 무시하고 어디서 호출하여도 선언된 함수를 먼저 읽고, 코드를 실행이 되기 때문에 보통 코드를 위에서 아래로 읽어나가면서 실행되는 자바스크립트에서 혼돈의 카오스를 맞이 하게 된다.


<img width="1072" alt="스크린샷 2021-11-19 오후 4 44 51" src="https://user-images.githubusercontent.com/80687195/142585054-2ff010a1-9cf0-4f73-81b4-aabc5ea8a40f.png">

