리액트는 페이스북이 만든 사용자 UI 구축을 위한 라이브러리이다.
하나의 단일 url을 가지고 SPA(single page application)으로 사이트를 표현하는 것을 가능케하는 프레임위크다

이 리액ㅌ는 3가지의 대표적인 특징을 가지고 있는데,
1. JSX문법
2. Component 기반
3. Virtual DOM

## JSX

JavaScript + XML 합쳐서 탄생한 기존 자바스크립트의 확장문법

JSX라 하며 JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장합니다. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있습니다.
JSX는 React “엘리먼트(element)” 를 생성합니다. 다음 섹션에서는 DOM에 어떻게 렌더링하는지 알아보겠습니다. 아래를 보면 JSX를 시작하기 위해 필요한 기본사항을 찾으실 수 있습니다.


## JSX란?
**자바스크립트 안에서 HTML 문법을 사용해서 view를 구성할 수 있게 도와주는 자바스크립트 문법**
HTML문법을 javascript코드 내부에 쓴것

### ✅ JSX attribute

(1) 속성은 항상 쌍따옴표로 감싼다.
class를 주고 싶을 때 원래 속성명은 class이지만 JSX에서는 className을 사용
(2) 태그는 항상 닫혀있어야 한다.
리액트에서는 반드시 클로징 태그를 써줘야
(3) 어떤 태그라도 Self-closing tag가 가능하다.
(4) 형제 노드를 작성할 수 없다.
```js
class App extends Component {

  render() {
    return (
      <div></div>
      <div></div>
      );
     }
 }
```
(5) JSX 안에 자바스크립트 값은 다음과 같이 사용한다.
변수를 먼저 렌더 안에서 정의하고 리턴에서 변수명을 중괄호로 감싼 형태로 표현한다.

### Element Rendering 엘리먼트 렌더링

React 요소가 DOM node에 추가되어 화면에 렌더되려면 ReactDOM.render 함수를 사용합니다. 첫 번째 인자에는 JSX로 React 요소를 인자로 넘기고, 두 번째 인자는 해당 요소를 렌더하고 싶은 container(부모요소)를 전달합니다



