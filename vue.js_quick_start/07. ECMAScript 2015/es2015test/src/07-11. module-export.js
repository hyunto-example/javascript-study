// 모듈
// ES2015부터 공식적으로 모듈을 지원
// 모듈이란 독릭성을 가진 재사용 가능한 코드 블록이다.
// 코드 블록 안에서 import, export 구문을 이용해서 모듈을 가져오거나 내보낼 수 있다.
export let var1 = 100;
export function add(a, b) {
    return a + b;
}

// 한번에 변수나 함수를 export
// let var1 = 100;
// function add(a, b) {
//    return a + b;
// }
// export {var1, add};