// 클래스
// ES5, ES5.1까지는 클래스가 제공되지 않았기 때문에 유사 클래스(Pseudo Class)를 만드는 방법을 사용했다.
// ES2015부터 공식적으로 클래스를 지원한다.
class Person {
    constructor(name, tel, address) {
        this.name = name;
        this.tel = tel;
        this.address = address;

        if (Person.count) {
            Person.count++;
        } else {
            Person.count = 1;
        }
    }

    static getPersonCount() {
        return Person.count;
    }

    toString() {
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
    }
}

let p1 = new Person('이몽룡', '010-222-2222', '경기도');
let p2 = new Person('홍길동', '010-333-3333', '서울');

console.log(p1.toString());
console.log(Person.getPersonCount());

// 상속
class Employee extends Person {
    constructor(name, tel, address, empno, dept) {
        super(name, tel, address);
        this.empno = empno;
        this.dept = dept;
    }

    toStrint() {
        return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
    }

    getEmpInfo() {
        return `${this.empno} : ${this.name}은 ${this.dept} 부서 입니다.`;
    }
}

let e1 = new Employee('이몽룡', '010-222-2222', '경기도', 'A12311', '회계팀');

console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());