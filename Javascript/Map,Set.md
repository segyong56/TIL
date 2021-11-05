## new Map

키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다.
- new Map() – 맵을 만듭니다.
- map.set(key, value) – key를 이용해 value를 저장합니다.
- map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
- map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
- map.delete(key) – key에 해당하는 값을 삭제합니다.
- map.clear() – 맵 안의 모든 요소를 제거합니다.
- map.size – 요소의 개수를 반환합니다.

객체를 키로 사용할 수 있다는 점은 맵의 가장 중요한 기능 중 하나입니다. 객체에는 문자열 키를 사용할 수 있습니다. 하지만 객체 키는 사용할 수 없습니다.

### 맵의 요소에 반복 작업하기
- map.keys() – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.
- map.values() – 각 요소의 값을 모은 이터러블 객체를 반환합니다.
- map.entries() – 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환합니다. 이 이터러블 객체는 for..of반복문의 기초로 쓰입니다.

```js

// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
  alert(entry); // cucumber,500 ...
}


// 각 (키, 값) 쌍을 대상으로 함수를 실행
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 ...
});

```

## new Set

셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다

- new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
- set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
- set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
- set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
- set.clear() – 셋을 비웁니다.
- set.size – 셋에 몇 개의 값이 있는지 세줍니다.

셋은 값의 유일무이함을 확인하는데 최적화

```js


let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  alert(value);
});

```
