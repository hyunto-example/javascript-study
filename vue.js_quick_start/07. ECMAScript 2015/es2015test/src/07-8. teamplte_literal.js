// 템플릿 리터럴
// 역따옴표(Backquate : `)로 묶여진 문자열에서 템플릿 대입문(${})을 이용해 동적으로 문자열을 끼워넣어 구성하는 방법
// Babel 트랜스 파일시 한글은 유니코드 이스케이프 형식(Unicode Escape Format)으로 변환된다.
var d1 = new Date();
var name = "홍길동";
var r1 = `${name} 님에서 ${d1.toDateString()}에 연락했다.`;
console.log(r1);

var product = '갤럭시S7';
var price = 199000;
var str = `${product}의 가격은 ${price}원 입니다.`
console.log(str);