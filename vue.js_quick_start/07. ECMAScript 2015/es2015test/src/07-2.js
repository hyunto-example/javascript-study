// 변수 스코프(Variable Scope) : let vs. var
let msg = "GLOBAL";

function outer(a) {
    let msg = "OUTER";
    console.log(msg);
    if (true) {
        let msg = "BLOCK";
        console.log(msg);
    }
}

let a = 100;

// 변수 중복 선언 (Variable Duplicated Declare)
// let, const는 중복 선언 불가
// let a = 'hello';