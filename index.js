let x;
console.log(x);  // undefined
let y = x;
x = null;
console.log(y);  // undefined
console.log(x);  // null
x = y;
console.log(x);  // undefined

let a;
let b = null;

console.log(a === b);          // false
console.log(a == b);           // true
console.log(a == null);        // true
console.log(b === undefined);  // true