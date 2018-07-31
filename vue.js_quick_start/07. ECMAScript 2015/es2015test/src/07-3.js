// 기본 파라미터 (Default Parameter)
function addContact(name, mobile, home = "없음", address = "없음", email = "없음") {
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-222-3333");
addContact("이몽룡", "010-222-4444", "02-3422-9000", "서울시");
addContact("성춘향", "010-111-2222", "031-555-2221", "경기도", "ch@gmail.com");