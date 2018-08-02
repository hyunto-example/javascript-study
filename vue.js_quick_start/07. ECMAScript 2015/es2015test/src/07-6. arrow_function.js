// 화살표 함수 (Arrow Function)

var test1 = function(a, b) {
    return a + b;
};

let test2 = (a, b) => {
    return a + b;
}

let test3 = (a, b) => a + b;

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));

// 화살표 함수와 기존 함수의 this 바인딩 차이점
// example 1
function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function() {
        this.age++;
    }
    for (var i = 1; i <= yearCount; i++) {
        incrAge(); // 차이점
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 0

// example 2
function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function() {
        this.age++;
    }
    for (var i = 1; i <= yearCount; i++) {
        incrAge.apply(this); // 차이점
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 20

// example 3
function Person(name, yearCount) {
    this.name = name;
    this.age = 0;

    var outerThis = this; // 차이점
    var incrAge = function() {
        outerThis.age++; // 차이점
    }
    for (var i = 1; i <= yearCount; i++) {
        incrAge();
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 20

// Arrow Function
function Person(name, yaerCount) {
    this.name = name;
    this.age = 0;

    var incrAge = () => {
        this.age++;
    };
    for (var i = 1; i <= yaerCount; i++) {
        incrAge();
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 20