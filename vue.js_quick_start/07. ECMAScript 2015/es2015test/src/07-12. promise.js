// 이전까지 AJAX를 통한 비동기 처리를 할 땐, 비동기 처리가 완료되면 콜백 함수가 호출되는 방식이었다.
// 그러나 비동기 처리 작업이 반복되면 콜백 함수들이 중첩되어 예외처리가 힘들어 진다.
// ES2015부터 Promise 객체를 통해 비동기 처리를 깔끔하게 처리할 수있다.
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var num = Math.round(Math.random() * 20);
        var isValid = num % 2;

        if (isValid) {
            resolve(num); // then()
        } else {
            reject(num); // catch()
        }
    }, 2000)
});

p.then(function(num) {
    console.log("홀수 : " + num);
}).catch(function(num) {
    console.log(`짝수 : ${num}`);
})

console.log("20까지의 난수중 홀수/짝수?");
console.log("결과는 2초 후에 나옵니다.!!!");