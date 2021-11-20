
http의 구조는 요청과 응답이 동일합니다. 

요청의 startLine은 말 그대로 요청의 첫 라인입니다.

method는 get, post, put, delete, option등등

request target은 request가 전송되는 목표 uri

version은 말 그대로 사용되는 http버전 입니다.

headers에는 요청이 전송되는 형식을 보내줍니다.

target의 host

요청을 보내는 body의 타입을 나타내는 content type등이 있습니다. 

body는 요청의 실제 메시지 / 데이터를 담고 있으며 body가 없는 request도 있다.

응답의 구조는 요청과 거의 같으며 startline에는 상태 코드와 상태 메시지가 있습니다.

