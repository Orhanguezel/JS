const firstName = "Max";
const lastName = "Mustermann";
const leer= "";
const space= " ";

console.log("firstName length: ", firstName.length);
console.log("lastName length: ", lastName.length);
console.log("leer length: ", leer.length);
console.log("space length: ", space.length);

const str = "Hello World bbbb bbbb ddd s  ss    ssss asd";
console.log("str length: ", str.length);
console.log("first letter: ", str[0]);
console.log("last letter: ", str[str.length]);// undefined
console.log("last letter: ", str[str.length-1]); // d
console.log("last letter: ", str[str.length-4]);
