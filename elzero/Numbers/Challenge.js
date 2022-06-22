// Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variable a + b One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variable b + d To Get This Values
console.log(((Math.trunc(b) / Math.ceil(d)).toFixed(2)).toString()); // 66.67 => String
console.log(Math.ceil((Math.trunc(b) / Math.ceil(d)))); // 67 => Number