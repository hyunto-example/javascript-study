// 객체의 속성(Property)명과 변수명이 동일하다면 속성명 생략 가능
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

var old_obj = {
    name: name,
    age: age,
    email: email
};
var new_obj = { name, age, email };

console.log(old_obj);
console.log(new_obj);


// 새로운 메서드 표기법
let p1 = {
    name: "아이패드",
    price: 20000,
    quantity: 2,
    // 기존 방식
    order: function() {
        if (!this.amount) {
            this.amount = this.quantity + this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    // 새로운 방식
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }
        console.log((100 * rate) + "% 할인된 금액으로 구매합니다.");
    }
}
p1.discount(0.2);
p1.order();