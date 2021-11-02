## Tree(트리)

데이터가 바로 아래에 있는 하나 이상의 데이터에 단반향으로 연결된 계층적 구조 ; **비선형구조**
- 깊이 : 루트로부터 하위 계층의 특정 노드까지의 깊이

- 레벨 : 같은 깊이를 가지고 있는 노드를 묶어서 레벨로 표현

- 높이 : 리프 노드를 기준으로 루트까지의 높이

- 서브트리 : 트리 구조를 갖춘 작은 트리를 서브 트리

가장 대표적인 예제는 컴퓨터의 디렉토리 구조

```js

class Tree {
  constructor(value) {
   // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }

	// 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

   // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요. 
    if (this.value === value) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    for(let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i]
      if(childNode.contains(value)) {
        return true;
      }

    }
    // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }

}
```

```js

// 자바스크립트 돔을 이용한 컴퓨터 디렉토리구조를 구현한 코드이다. 
// 토글버튼을 만드는 
function createTreeView(menu, currentNode) {
  // TODO: createTreeView 함수를 작성하세요.
 

  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li")
    
    if(menu[i].children) {
      const input = document.createElement("input")
      const span = document.createElement("span")
      const ul = document.createElement("ul")
      span.textContent = menu[i].name
      input.setAttribute('type', 'checkbox')
      li.append(input, span, ul)
      currentNode.append(li)
      // 재귀적으로 만들어가는 코드
      createTreeView(menu[i].children, ul)
    } else {
      li.textContent = menu[i].name
      currentNode.append(li)
    }
  }

}
```

## Binary Search Tree(이진 탐색 트리)

이진트리는 자식노드가 최대 두 개인 노드들로 구성된 트리입니다. 
**모든 왼쪽 자식의 값이 루트나 부모보다 작고, 모든 오른쪽 자식의 값이 루트나 부모보다 큰 값을 가지는 특징**

```js
const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  //binarySearch(이분검색) => 배열을 중간부터 중간값이 target보다 큰지 확인하는 검색

  let firstNum = 0; //0부터 시작
  let lastNum = arr.length - 1 // arr.length; //배열의 마지막 인덱스부터 시작
 
 //반복문은 왼쪽에서 지정한 인덱스가 오른쪽의 인덱스보다 작거나 같을 때까지만 반복한다. 
 //즉 배열에 맨왼쪽에 있는 인덱스가 배열의 맨오른쪽에 있는 인덱스보다 크면 안되기 때문에
  while(firstNum <= lastNum) {
    //중간값 찾기 0에서 배열의 마지막인덱스를 더하고 2로 나눈 가운데값을 기준으로 한다.
    let mid = parseInt((firstNum+lastNum)/2);
    if(arr[mid] === target) {
      return mid
    }
    //만약에 target이랑 같지않고 arr[mid]값이 target보다 크다면
    //target이 arr[mid]값보다 작은 수들에서 찾아야 하기 때문에 lastNum의 인덱스를 mid-1
    else if (arr[mid] > target) {
      lastNum = mid- 1

    //target이 arr[mid]값보다 크다면 firstNum의 인덱스를 mid+1 그래야 arr[mid]값보다 큰 수들을 찾아야 하기 때문에 
    } else {
      firstNum = mid + 1
    } 

  }
  return -1

};

```

