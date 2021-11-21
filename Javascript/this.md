
# 자바스크립트에서 this의 규칙

## ☝ 일반함수 실행 방식

함수가 어떤 방식으로 실행하느냐에 따라 this 결정됩니다.

`this === global object: 브라우저에서는 window를 가리킨다.`


```js

const age = 1;

function foo() {

  console.log(this.age);
  
}

foo(); // 1 (글로벌 객체 실행)

```

### 1-1. Strict mode : 엄격한 모드

- 엄격한 모드에서 일반 함수 실행 방식을 쓰면 window객체를 가르키지 않습니다. 그 결과 `this`는 undefined가 되어 `error`가 출력된다.

```js

"use strict";

const name = "ken";

function foo() {
  console.log(this.name); // 'this' === undefined // error 
 }
 
 foo(); 

```

## 👆 메서드 함수(생성자 객체 속 메소드함수)

- `ken.foo()` : foo함수에서의 `this`는 `ken`을 가리킨다

```js

const age = 100;

const ken = {
  age: 35,
  foo: function foo() {
    console.log(this.age);
   }
}  
 
ken.foo();

// 다른버전

function foo() {
  console.log(this.age);
}

const age = 100;

const ken = {
  age: 36,
  foo: foo
};

const wan = {
  age: 32,
  foo: foo
};

var fn = ken.foo;

ken.foo(); // 36
wan.foo(); // 32
foo(); // 100

```

## 👆 function.prototype.call, apply, bind

### 3-1. function.prototype.call()

call 함수의 인자값으로 변수를 넣어줌으로 `this`를 변수로 할당한다. 아무 인자도 넣지 않으면 `일반 함수 실행`과 동일하다.

```js

const age = 100;

function foo() {
  console.log(this.age)
}

const ken = {
  age : 36,
  log : foo
}

foo(); // 100;
foo.call() // 100;
foo.call(ken); // 36;

```

### 3-2. function.prototype.apply()

- apply 함수와 `call`함수의 실행하는 방법은 동일하다
- 다른 점은 `call`의 경우 두번 째부터 인자 목록을 받으나 `apply`는 인자 배열 하나를 받는 다는 것이다.

```js

  const age = 100;
  
  function foo() {
    console.log(this.age)
  }
  
  const ken = {
    age: 36,
    log : foo
  }
  
  foo(); // 100
  foo.call(); // 100
  foo.apply(ken); // 36;

```

### 3-3. function.prototype.bind()

bind (opens new window)함수는 `this` 키워드를 주어진 변수로 설정하고, 앞쪽의 매개변수도 자신의 인자를 사용해 미리 순서대로 채워놓은 새로운 함수를 반환합니다.


## 👆 생성자 함수 new

`new`와 같이 쓰는 `this`는 return문이 없어도 자동으로 return으로 할당된다.


```js

function Person() {
  
  console.log(this.age);
  this.age = 100;
  
  console.log(this.age);

}

new Person();

```






