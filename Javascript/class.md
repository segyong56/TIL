클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀이다

객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.
new function을 사용할 수 있습니다.

클래스라는 문법을 사용하면 객체 지향 프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있다.


## 기본문법
```js

class MyClass {

  constructor() {
   
   }
   
   
  method1() {
  ....
  }
  
  method2() {
  ...
  }
  

```
이렇게 클래스를 만들고, new MyClass()를 호출하면 내부에서 정의한 메서드가 들어 있는 객체가 생성된다.

new Class()를 호출하면, 새로운 객체가 생성된 후, 넘겨받은 인수와 함께 constructor가 자동으로 실행된다. 
그리고 method1 객체 메서드를 호출할 수 있다.

자바스크립트에서 클래스는 함수의 한 종류이다.

하나의 모델이 되는 청사진을 만들고 ⇒ class

그 청사진을 바탕으로 한 객체(object)를 만드는 ⇒ instance

객체를 어떤 식으로 만드는지 살펴보면,

그냥 일반적인 함수를 정의하듯 만든다.

이때, 함수를 이용하는 방법이 조금 다르다. new 키워드를 써서 만듭니다.

```jsx
▪️ ES5 클래스는 함수로 정의할 수 있다.
// 청사진을 일반적인 함수로 만든다.
function Car(color) { 
	//인스턴스가 만들어질 때 실행되는 코드
	//클래스: 속성의 정의
	this.color = color;
}

//클래스: 메소드의 정의
Car.prototype.refuel = function() {
	// 연료 공급을 구현하는 코드
}

Car.prototype.drive = function() {
	// 운전을 구현하는 코드
}

// instances
let avante = new Car('blue')
let mini = new Car('cyan')
let beetles = new Car('red')

▪️ ES6 class라는 키워드를 이용해서 정의할 수 있다.
class Car {
	constructor(brand, name, color){
		// 인스턴스가 만들어질 때 실행되는 코드
		// 클래스 : 속성의 정의
		this.brand = brand;
		this.name = name;
		this.color = color;
	}

// 클래스: 메소드의 정의
	refuel() {
	
	}

	setSpeed() {
	
	}

	drive() {

	}
}

// 인스턴스에서의 사용
let avante = new Car('hyundai', 'avante', 'black');
let mini = new Car('bmw', 'mini', 'white');
let beetles = new Car('volkswagen', 'beetles', 'red');
```

클래스를 만드는 새로운 문법이 ES6에 도입되었다. 바로 class 키워드이다.

객체 지향 프로그래밍에서 생성자(constructor)함수라고 부른다. 인스턴스가 만들어질 때 실행되는 코드

인스턴스를 만들 때에는 new 키워드를 사용하며, 즉시 생성자 함수가 실행되며, 변수에 클래스의 설께를 꼭 닮은 새로운 객체, 즉 인스턴스가 할당된다.

각각의 인스턴스는 클래스의 고유한 속성과 메소드를 갖게 된다.

### ▷ 속성과 메소드

클래스에 속성과 메소드를 정의하고, 인스턴스에서 이용한다.

위의 코드를 예를 들어 속성과 메소드를 분류하면,

예를 들어 자동차의 속성은 브랜드, 차 이름, 색상등이 있을 수 있다. 메소드는 쉽게 말해 객체에 딸린 함수이다. 연료 주입, 속력 설정, 운전 등이 메소드이다.

속성 : brand, name, color

메소드 : refuel(), setSpeed(), drive() 

ES5는 prototype이라는 키워드를 사용해야 메소드를 정의할 수 있습니다. Car 클래스에 메소드를 추가하기 위해서는 `Car.prototype.refuel`과 같이 `prototype`을 이용해야 합니다. 이후 `prototype`에 대해서 자세히 공부하고, 지금은 메소드 정의 시 사용법만 숙지합니다.

ES6에서는 생성자 함수와 함께 class 키워드 안쪽에 묶어서 정의합니다. `refuel() {}`, drive() {}`와 같이 작성되어 있는 부분입니다.

▷ 인스턴스에서의 사용

지정한 속성과 메소드를 어떻게 인스턴스에서 사용하는지 알아야 한다.

▷ prototype? constructor? this?

prototype : 모델의 청사진을 만들 때 쓰는 원형 객체

constructor : 인스턴스가 초기화될 때 실행하는 생성자 함수

this: 함수가 실행될 때,






