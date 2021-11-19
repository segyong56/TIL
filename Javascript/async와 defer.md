
## async와 defer

💡 먼저 브라우저 작동하는 원리를 알아야 합니다. <br />

사용자 인터페이스에 URL에 통해 들어온 정보는 브라우저엔진으로 전달이 되며 브라우저 엔진에서 사용자인터페이스와 렌더링엔진 사이에서 작동을 조작하는 역할을 하고 별다른 요청이 없다면 렌더링 엔진으로 정보를 전달하게 됩니다.
이때, 정보에는 html, css, js파일, http통신등이 있게 됩니다. 렌더링엔진에서 html파일, css파일을 해석하여 html파일은 dom객체를 만들고, css파일은 해석하여 스타일 규칙을 만들어 두 해석한 결과를 합쳐서
렌더트리를 만들게 되는데 이과정에서 js파일이 포함되었다면 이때 파일을 읽는 방법이 어떻게 개발자가 적어주었는냐에 따라 브라우저에 페이지가 나타나는 방법, 속도가 달라지게 됩니다.

### 1. head태그 안에 script태그를 포함한 경우

<img width="867" alt="스크린샷 2021-11-19 오후 1 52 32" src="https://user-images.githubusercontent.com/80687195/142575941-ed94f384-ba37-4326-9292-48e8345e03ca.png">


html태그를 읽어가며 script태그를 만나게 되면 fetching js, executing js
자바스크립트파일을 읽고, 실행합니다. 이러는 과정에서 parsing html하는 과정이 blocked현상이 일어나게 됩니다. 
잠시 멈추는 것을 말합니다. html은 화면에 나타는 요소들이기 때문에 자바스크립트를 읽고나서 실행하고 난 후 화면에 보여지는 현상이기 때문에 화면에 페이지가 나타나는 것이 느려지는 문제가 있습니다.
 
### 2. body태그 안에 script태그를 포함한 경우

html태그를 모두 parsing 끝난 후 자바스크립트코드를 읽고 실행합니다. 
화면에 페이지가 나타나는 것이 휠씬 빨라집니다. 
하지만 화면이 다 보여진 후 자바스크립트가 실행되기 때문에 자바스크립트를 이용하여 만드는 css적인 요소가 늦게 발생되는 문제가 생깁니다.

### 3. head태그 안에 script태그를 포함한 후 async를 설정해 준 경우

<img width="867" alt="스크린샷 2021-11-19 오후 1 54 51" src="https://user-images.githubusercontent.com/80687195/142576735-7cfafc1c-b013-4fa6-b877-22c8df2b83e8.png">


 이렇게 async를 설정해 주면 default값은 true이며, blocked현상을 없앨 수 있다. 잠시 멈추고 script를 읽고 실행했던 부분을 html parsing을 멈추지않고 parsing을 하면서 script코드가 실행하게 할 수 있습.니다.
 하지만 이 또한 문제가 생길 수 있습니다. 자바스크립트에서 queryselector과 같은 속성을 사용하여 코드를 작성했다면  html이 다 읽기 전에 실행이 되는 부분이 있을 수 있습니다.


### 4. head태그 안에 script태그를 포함한 후 defer를 설정해 준 경우

<img width="867" alt="스크린샷 2021-11-19 오후 1 55 45" src="https://user-images.githubusercontent.com/80687195/142576747-a9abf3a5-fed4-431f-a7b8-2aaf4aad0f62.png">


이 경우에는 우선 javascript코드를 읽습니다. 그리고 난 후 html parsing이 끝난 후에 javascript코드를 실행하는 방법입니다.
즉, page가 모두 준비된 후 javascript코드가 실행이 되어 fetching되는 부분을 빠르게 할 수 있습니다. 
