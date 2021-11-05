CSR과 SSR 

실제로 웹이 웹서버와 통신해서 웹을 다운받는 방식은 크겍 2가지 

## CSR (client side rendering)
브라우저 측에서 html, css, javascript를 처음부터 실행시키는 방식
html, css를 전부 브라우저에서 렌더링하게 된다. 이때 웹 서버는 html, css, javascript를 
단순히 서빙하는 역할을 한다.
download html => download javascript => evaluate javascript => fetch data from api => **user see content**

## SSR (server side rendering)
웹 서버에서 html, css, javascript를 미리 한 번 실행시킨 후 브라우저에게 건네주는 방식
그렇게 되면 api통신을 웹 서버에서 미리 진행해서 데이터를 적용할 수 있다.
최종적으로 결과가 적용된 html, css, javascript파일을 받게 되서 브라우저는 더빠르게 화면을 볼 수 있다.

단점으로는 웹서버가 그만큼 일을 더 하게 된다.

download html ====> **user see Content**


React, vue 프레임워크는 CSR렌더링 방식에 SPA형태로 제공된다
next.js, nuxt.js는 SSR렌더링으로 클라이언트각 빠르게 웹 접근할 수 있도록 적용한다. 
