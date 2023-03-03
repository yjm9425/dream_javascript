/**
 *
 */

let intetger = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(intetger);
console.log(negative);
console.log(double);

let binary = 0b1111101; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b;
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / "text"); // NaN (Not a Number)

//정말 큰 숫자를 나타내고 싶다 -> 뒤에 n을 붙이면 됨
let bitInt = 1234567890123456789012345678901234567890n;
console.log(bitInt);
