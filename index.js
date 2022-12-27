// 형변환(Type conversion)

// String, Number, Boolean
console.log(String(10) + String(5));
console.log(Number('10') + Number('5'));
console.log(Number('10' + '5'));

console.log(typeof('4'+3)); // string
console.log(typeof(3-true)); // number
console.log(typeof(Boolean(5)*true)); //number
console.log(typeof(true<false)); //false

console.log('5'/true!='5'); // false

// 일치 동등 비교
console.log(2 === '2') // false
console.log(2 == '2') // true

// 불일치 부등 비교
console.log(2 !== '2') // true
console.log(2 != '2') // false