const namen =  ["Anna", "Berta", "Carla", "Dorothea", "Emilia", "Frieda", "Greta", "Hanna", "Iris", "Julia"
]
console.log(namen[0]);
console.log(namen.length);

// pop 
namen.pop();
//console.log("deletedLastElement:", deletedLastElement);
console.log(namen);

// splice
const deletedElements= namen.splice(2,3);
console.log(deletedElements);// ["Carla", "Dorothea", "Emilia"]
console.log(namen);//["Anna", "Berta", "Frieda", "Greta", "Hanna", "Iris", "Julia"]

const deletedElements2= namen.splice(0,1, "Anna", "Berta");
console.log(deletedElements2);//["Anna"]
console.log(namen);//["Anna", "Berta", "Frieda", "Greta", "Hanna", "Iris", "Julia"]

// slice
const copyOfNamen= namen.slice(1,4);
console.log(copyOfNamen);//["Berta", "Frieda", "Greta"]
console.log(namen);//["Anna", "Berta", "Frieda", "Greta", "Hanna", "Iris", "Julia"]

//join, toString, String
const arrayToString= namen.join(", ");
console.log(arrayToString);//Anna, Berta, Frieda, Greta, Hanna, Iris, Julia
console.log(typeof arrayToString);//string

const arrayToString2= namen.toString();
console.log(arrayToString2);//Anna,Berta,Frieda,Greta,Hanna,Iris,Julia
console.log(typeof arrayToString2);//string

const stringToArray= String(namen);
console.log(stringToArray);//Anna,Berta,Frieda,Greta,Hanna,Iris,Julia
console.log(stringToArray.toUpperCase());//ANNA,BERTA,FRIEDA,GRETA,HANNA,IRIS,JULIA






