// ECMAScript2015 부터는 Set, Map, WeakSet, WeakMap과 같은 집합, 맵을 제공한다.

// ----------------------------------------------------------------------------
// Set : 중복을 허용하지 않고, 합집합(Union)과 교집합(Inersect)와 같은 다양한 집합 연산 제공
var s1 = new Set();
s1.add("사과");
s1.add("배");
s1.add("사과");
s1.add("포도");
console.log(s1);

var john = new Set(["사과", "배", "표도"]);
var susan = new Set(["파인애플", "키위", "배"]);

// 합집합 : Set({"사과", "배", "표도", "파인애플", "키위"})
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);

// 교집합 : Set({"배"})
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);

// 차집합 : Set {'사과', '포토'}
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);


// ----------------------------------------------------------------------------
// Map : 키-값 쌍의 집합체이며, 키는 고유한 값이어야 한다.
let teams = new Map();
teams.set('LG', '트윈스');
teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');
teams.set('기아', '타이거스');
teams.set('한화', '이글스');
teams.set('롯데', '자이언츠');

console.log(teams.has('SK'));
console.log(teams.has('NC'));
console.log(teams.get('LG'));