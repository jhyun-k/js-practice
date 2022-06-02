/* Q6. 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined */

//A. 2번? 머르겠당
// 정답은 '2번'입니다. JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가합니다. 맞았다^0^/

/* Q7. 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let
4)  _age
5)  1age */

//A. 3번 4번? 
/* 
정답은 '3번', '5번' 입니다. JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며 let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능합니다. 틀렸다ㅠㅅㅠ */

//Q8.자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

//A. 84

//Q9.다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

//데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result =

console.log(result);


/* 출력
2019/04/26 11:34:27 */
