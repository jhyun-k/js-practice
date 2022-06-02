//Q1. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

nums.splice(3,2)
console.log(nums)

/* 답안
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop(); */ 

//Q2.<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

//데이터
var arr = [200, 100, 300];
arr.splice(2,0,10000)
console.log(arr);

//출력
[200, 100, 10000, 300]

/*답안
 var arr = [200, 100, 300];
arr.splice(2, 0, 10000); 
// splice() 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
console.log(arr); */

//Q3. 다음 출력 값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof(arr));

//A. object  
// 정답은 '4번'입니다. undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.

//Q4. 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
/* 1)  입력 : a =1,   출력 : number

2)  입력 : a = 2.22,   출력 : boolean

3)  입력 : a = 'p',   출력 : string

4)  입력 : a = [1, 2, 3],   출력 : object */

//A. 2번 , 1은 number, 3은 문자열, 4는 배열이니까 object , boolean은 논리값이다

/* 2)  입력 : a = '2.22',   출력 : boolean

number 가 맞는 출력값입니다. boolean 에 해당하는 값은 true 와 false 두 가지 입니다.

정답은 '2번'입니다. */

//Q5. 다음 코드의 출력 값으로 알맞은 것은?
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

//A. 1+3+10(a)+2(b) = 16

console.log(a+b);



