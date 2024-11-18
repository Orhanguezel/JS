# Allgemeine Wiederholung, Closur, Recursive function / 18.11.24

## LERNZIELE :

1. Wiederholung mit Spiele

2. Was ist `Closur`?

3. Was ist `Recursive function`?

### Resources :

- [Closur MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- [Recursive function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

### Tasks :

- Adel : 1 1 1 0

```js
function count() {
  let count = 0;
  if (true) {
    count = 1;
  }
  return count;
}
console.log(count()); // 1
```

```js
function greet(name = "Guest") {
  console.log("Hello, " + Name); // Parameter name !== Name
}
greet();
```

- Mohab : 0 0 0

```js
function checkNumber(num) {
  return num > 10 || num < 5; //
}
console.log(checkNumber(5)); //
```

```js
let { x, y } = { x: 10 };
console.log(y); //
```

- Dennis : 1 2 1 2

```js
let arr = [1, 2, 3];
console.log(arr[3]); // Index nicht verfuegbar
```

```js
function test() {
  var x = 10;
}
console.log(x); // 10
```

- Randy : 1 0 0 2

```js
for (let i = 0; i < 5; i--) {
  // INfinite loop
  console.log(i); //
}
```

```js
let num = parseInt("12px"); // 12
console.log(num === 12.0); // true
```

- Sevil : 0 2 0

```js
let a = "5" + 2;
console.log(a); // 52 string
```

```js
let arr = [10, 20, 30];
for (let i in arr) {
  console.log(arr.i); // 0,1,2
}
```

- Mark : 0 2 1 2

```js
function add(a, b) {
  a + b;
}
console.log(add(3, 4)); // undefined brauchen return
```

```js
if ({}) {
  console.log("Object is truthy");
}
```

- Norman : 0 2 0

```js
let numbers = [1, 2, 3];
numbers.push(4).pop();
console.log(numbers);
```

- Leon : 1 2 1

```js
let x = Math.round(4.5);
console.log(x === 4); // false
```

```js
console.log(0.1 + 0.2 === 0.3); // false
```

- Radoslawa : 0 2 0 0

```js
let arr = [1, 2, 3];
arr.splice(2, 1, 4);
console.log(arr); // [1,2,4]
```

```js
let arr = [10, 2, 30];
arr.sort();
console.log(arr); // [2, 10, 30]
```

- Chris : 1 0 1

```js
function multiply(a, b, c) {
  return a * b;
}
console.log(multiply(2, 3, 4));
```

```js
let result = NaN;
console.log(result === NaN); // false
```

- Olga : 1 0 1 0

```js
let obj = { key1: "value" };
console.log(obj.key); //
```

```js
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
  };
}
let counter = createCounter();
console.log(counter()); //
```

- Orhan : 1 2 0

```js
let nums = [1, 2, 3];
nums.map((num) => {
  num * 2;
}); // return oder {} loeschen
```

```js
function myFunc() {}
console.log(myFunc.length); // 0 weil kein Parameter gibts
```
