// 구조분해 할당 (destructuring assignment)
let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = {
    name: "홍길동",
    age: 20,
    gender: "M"
};
let { name: n, age: a, gender } = p1;
console.log(n, a, gender)

// 함수에서의 구조분해 할당
function addContact({ name, phone, email = "이메일 없음", age = 0 }) {
    console.log("이름 : " + name);
    console.log("전번 : " + phone);
    console.log("이메일 : " + email);
    console.log("나이 : " + age);
}

addContact({
    name: "이몽룡",
    phone: "010-3434-1212"
})