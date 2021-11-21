
## prototype 이란?


## 객체 생성자

프로토타입과 클래스에 대해서 알아보기 전에 우선 객체 생성자라는 것을 알아봅시다.
객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 
구현 할 수 있게 해줍니다.

프로토타입이란, **유전자** 라고 보면 된다.

```js

// 객체 생성자 함수를 사용
 function Animal (type, name, sound) {
 
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
      console.log(this.sound);
    }
 
 }
 
 
 const dog = new Animal('개', '멍멍이', '멍멍');
 const cat = new Animal('고양이', '야옹이', '야옹');
 
 dog.say();
 cat.say();

```


프로토타입은 다음과 같이 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드를 입력하여 설정 할 수 있습니다.



### 객체 생성자 상속받기

우리가 Cat과 Dog라는 새로운 객체 생성자를 만든다고 가정했을 때, 해당 객체 생성자들에게
Animal의 기능을 재사용한다고 가정해볼 수 있다.


```js

function Animal(type, name, sound) {

  this.type = type;
  this.name = name;
  this.sound = sound;
  
}

Animal.prototype.say = function() {
  
  console.log(this.sound);

}


Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Cat.prototype = Animal.prototype;


const dog = new Dog('멍멍이', '멍멍')
const cat = new Cat('야옹이', '야옹')

dog.say();
cat.say();
 

```
새로 만든 Dog와 Cat함수에서 Animal.call을 호출해주고 있는데, 여기서 첫번째 인자에서 this를 넣어주어야 하고,
그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 한다.

추가적으로 prototype을 공유해야 하기 때문에 상속받은 객체 생성자 함수를 만들고 나서 prototype값을 Animal.prototype으로 설정해주었습니다.






