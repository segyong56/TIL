```js

// node.js의 express 프레임워크를 이용하여 cors를 설정해줌으로써 외부 API를 클라이언트에서 사용할 수 있도록 해줄 수 있다.
const express = require("express");
const cors = require("cors");

// request라는 모듈을 이용하여 요청해서 받은 body를 클라이언트에 보낼때 사용하는 모듈이다, 하지만 정확히 어떤 식으로 작동되는 지는 모르겠다.
const request = require("request");
const app = express();
const port = 5000;

const corsOptions = {

// 특정 오리진 설정 또는 모든 오리진 true로 설정해주자
  origin: "http://localhost:3000" || true,
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.json({
    hello: "hello",
  });
});

// herren과제를 하며 herren에서 주신 api를 클라이언트에 바로 사용했을 때 cors에러가 나었다. 근데, cors에러를 직접 해결할 능력이 있는지 보기위해 내주신거 같았다...;; request를 이용하여 응답받은 body
데이터를 client로 다시 보내줌으로써 cors를 해결할 수 있다.

app.get("/campaigns", (req, res) => {
  const url =
    process.env.HERREN_CAMPAIGNS;

  request(
    {
      url: url,
      method: "GET",
    },
    function (error, response, body) {
      res.status(200).send(body);
    },
  );
});

app.get("/status", (req, res) => {
  const url = process.env.HERREN_STATEMENT

  request({
    url: url,
    method: "GET"
  },
   function(error, response, body) {
     res.status(200).send(body);
   }
  )
})

app.listen(port, () => {
  console.log(`Server open`);
});
```
