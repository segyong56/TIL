

## Flexbox

## box의 속성을 바꾸게 해주는 속성들
 ✨ display  : flex;


 ✨ flex-direction

- default값은 row이다.
- row-reverse : box의 item들을 오른쪽에서 왼쪽으로 정렬해준다.
- coloum : box의 item들을 위에서 아래로 정렬해준다.
- coloum-reverse : box의 item들을 아래에서 위로 정렬해준다.
 
✨ flex-wrap

- default값은 nowrap이다. nowrap이다.
- nowrap : box속의 item들이 box의 사이즈가 변해도 줄바꿈이 일어나지 않고 item들의 사이즈가 변하게 한다.
- wrap : wrap 속성을 이용하면 box의 사이즈가 변함에 따라 item들의 줄바꿈을 해준다.

✨ flex-flow

- flex-flow: column no-wrap으로 설정하게 되면 direction을 column으로 하고, flex-wrap의 속성을 no-wrap으로 한번에 설정이 가능하다.

✨ justify-content

- flex-start : 수직축을 중심으로 왼쪽에 배치
- flex-end : 수직축을 중심으로 오른쪽에 배치
- center : 수직축을 중심으로 중앙에 배치
- space-around : 각 item의 여백을 주는 속성으로, border의 값만큼 여백을 준다.
- space-between : 수직축을 중심으로 item들을 일정 여백을 주어 box의 width에 맞게 여백을 주는 속성이다.

✨ align-items
 
- center : 수평축을 중심으로 중앙에 배치

✨ align-content
 
- space-between : 수평축을 중심으로 item들을 일정 여백을 주어 box의 height에 맞게 여백을 주는 속성이다.


## item의 속성을 바꾸게 해주는 속성들!



 - flex-grow : item이 box의 크기가 커질때 아이템이 커지는 비율을 설정해 준다. default값은 0이다. 
 
 <img width="791" alt="스크린샷 2021-11-19 오후 12 34 16" src="https://user-images.githubusercontent.com/80687195/142562649-5637ce9e-d2bb-4289-bf27-c84c3f219c92.png">

 
 - flex-shrink : item이 box의 크기가 작아질 때 아이템이 작아지는 비율을 설정해 준다. default값은 0이다.
 
 - flex-basis : default값으로는 auto값으로, item에 크기 퍼센트를 주어 비율에 맞게 box속 item의 크기를 설정해 줄 수 있다.
 
 <img width="766" alt="스크린샷 2021-11-19 오후 12 36 09" src="https://user-images.githubusercontent.com/80687195/142562573-10f51891-be3e-41cb-ae07-36581c4f7349.png">

 - flex : flex-grow, flex-shrink, flex-basis값을 설정해 줄 수 있다.

 <img width="771" alt="스크린샷 2021-11-19 오후 12 36 37" src="https://user-images.githubusercontent.com/80687195/142562537-5c1c3d72-4a76-4745-8ecc-c7a62be6fde8.png">

 - align-self : 각 item마다 배치를 설정해 줄 수 있다. 한개의 item에만 배치를 설정해주고 싶을 때 사용하는 속성이다.

<img width="764" alt="스크린샷 2021-11-19 오후 12 37 07" src="https://user-images.githubusercontent.com/80687195/142562622-e57eacd1-46af-4672-85d7-49b69eb0ebef.png">


🔗 Resources: <br/>
✨ Material Design Color Tool:
https://material.io/resources/color/#... <br/>
✨ CSS Tricks for Flexbox:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ <br/>
✨ MDN Float:
https://developer.mozilla.org/en-US/d... <br/>
✨ MDN Flexbox: 
https://developer.mozilla.org/en-US/d... <br/>
