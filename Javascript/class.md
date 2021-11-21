## 객체지향(Object Oriented Programming,Javascript, OOP)

데이터와 기능을 한 곳에 묶어서 처리합니다.
속성과 메소드가 하나의 "객체"라는 개념에 포함된다.

클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀이다

객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.
new function을 사용할 수 있습니다.

객체 지향 프로그래밍은 하나의 모델이 되는 청사진(blueprint)을 만들고, 그 청사진을 바탕으로 한 객체를
만드는 프로그래밍 패턴이다.

하나의 모델이 되는 청사진를 만들고 => class


### 💎 클래스

클래스라는 기능은 C++, Java, C#, PHP 등의 다른 프로그래밍 언어에는 있는 기능인데 자바스크립트에는 없었기 때문에 예전 자바스크립트 (ES5) 에서는 클래스 문법이 따로 없었기 때문에 위에서 작성한 코드처럼 객체 생성자 함수를 사용하여 비슷한 작업을 구현해왔습니다.

ES6 에서부터는 class 라는 문법이 추가되었는데요, 우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해줍니다. 추가적으로, 상속도 훨씬 쉽게 해줄 수 있습니다.


```js

 class Animal {
 
  constructor(type, name, sound) {
  
    this.type = type;
    this.name = name;
    this.sound = sound;
  
  }
  
  say() {
  
    console.log(this.sound)
    
  }
}

const dog = new Animal('개', '멍멍이', '멍멍)
const cat = new Animal('고양이', '야옹이', '야옹')

dog.say();
cat.say();

```

여기서 우리가 say 라는 함수를 클래스 내부에 선언하였는데요, `클래스 내부의 함수를 '메서드'`라고 부릅니다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록이 됩니다.

class 를 사용했을때에는, 다른 클래스를 쉽게 상속 할 수 있습니다.

```js

// animal class
class Animal {

  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    
   }

  say() {
    console.log(this.sound)
  }
}


class Dog extends Animal {

  constructor(name, sound) {
    super('개', name, sound);
   }
}

class Cat extends Animal {

  constructor(name, sound) {
    super('고양이', name, sound) 
  }
}

const dog = new Dog('멍멍이', '멍멍')
const cat = new Cat('야옹이', '야옹')

dog.say();
cat.say();

```

결과물
```js

멍멍
야옹

```

상속을 할 때는 `extends` 키워드를 사용하며, constructor에서 사용하는 `super()` 함수가 상속받은 클래스의 생성자를 가르킵니다.




[참고문헌] : https://velog.io/@o_oxxv/JavaScript-class-%ED%82%A4%EC%9B%8C%EB%93%9C
[참고문헌] : https://learnjs.vlpt.us/basics/10-prototype-class.html
