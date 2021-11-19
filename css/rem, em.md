## 🌼 브라우저 폰트사이즈 px, rem, em 

### 💡 px

1px은 모니터위에 화면에 나타낼 수 있는 가장 작은 단위이다. 절대적인 값으로 브라우저의 view size가 변해도 변하지 않는 값이 된다.

### 💡 rem

r(root)em이라는 뜻으로 root값에 따라 상대적으로 폰트사이즈를 변하게 하기 위해서 사용된다.
즉, 브라우저의 root font-size는 16px이다. 2rem은 32px, 1rem은 16px로 설정된다.

### 💡 em

부모의 폰트사이즈에 따라 상대적으로 폰트사이즈가 변하게 된다.
즉, 브라우저의 root값(body)의 font-size가 16px이기때문에, 2em은 32px가 된다.

하지만,

<img width="882" alt="스크린샷 2021-11-19 오전 11 34 14" src="https://user-images.githubusercontent.com/80687195/142559216-a9b293e7-162c-4bcd-854e-a7ccbec50f93.png">

 ```html

<style>
  .parent {
    font-size: 2em(32px)
  }
  
  .child {
    font-size: 1em(32*1 = 32px) 
  }
  
</style>

<div class='parent'>
 <div class='child'>
   child
 </div>
</div>


```
부모의 폰트사이즈에 따라 상대적으로 폰트사이즈가 변하게 된다.

🔍 TIL 후기 <br/>
왜 반응형할때 폰트사이즈가 반응형으로 움직이지 않았는지 알게되었다.

✨ 유용한 툴
pxtoem.com ⇢ http://pxtoem.com/
