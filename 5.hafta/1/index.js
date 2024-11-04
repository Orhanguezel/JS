console.log("hi");
let x = 5;
if (3 < 4) console.log("nice");
for (let i = 0; i < 5; i++) console.log(i);
while (x < 10) {
  console.log(x);
  x++;
}

for (let i = 0; i < 5; ) {
  console.log(i);
  i += 2;
}

/*
+
++
+++
++++
*/

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "+";
    console.log(str);
  }
}

for (let i = 1; i <= 5; i++) {
    console.log("+".repeat(i));
  }
  

let shape= "";
for (let i = 1; i <= 5; i++) {
  shape += "+";
  console.log(shape);
}

console.log(`
    +
    ++
    +++
    ++++`);

Math.random(); // 0-1 arasında rastgele sayı üretir
console.log(Math.round(Math.random()*10));

const arr =[1,2,3,4,5];
console.log(arr[Math.round(Math.random()*arr.length)]);
arr[0]=4;
console.log(arr);
arr[1]="ankara";
arr.unshift(5);
console.log(arr);
arr.push(46);
console.log(arr);
console.table(arr);
console.clear();
console.error("hata oluştu");
console.warn("bir uyarı var");
console.clear();

const fun1 = () => {
    fun2();
}
const fun2 = () => {
    fun3();
}

const fun3 = () => {
    console.log("hello");
}
fun1();


function sum(a,b) {
    console.log(a+b);
}

console.log(sum(5,6));

// NaN
// undefined
// null

let something;
console.log(something);

let something1=null;
console.log(something1);

let something2=5;
console.log(something2);

let something3="ankara";
console.log(something3);

let something4= undefined;
console.log(something4);

something= "hi";
console.log(something);

something1= 5;
console.log(something1);

something4= "hello";
console.log(something4);

console.log(parseInt("3.55"));
console.log(parseFloat("3.55"));
console.log(parseInt("3orhan"));
console.log(parseInt("orhan3")); // NaN
console.log(parseFloat("3.55orhan"));

1<5? console.log("evet"): console.log("hayir");


