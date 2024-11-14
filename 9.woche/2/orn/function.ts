//function topla(a, b) {
   // return a + b;
//}

function topla2(a: number, b: number): number {
    return a + b;
}

let topla3 = function (a: number, b: number): number {
    return a + b;
}

console.log(topla(2, 3));
//console.log(topla("Ankara", 3));
console.log(topla2(2, 3));
console.log(topla3(2, 3));

function topla4(a: number, b: number=4): number {
    return a + b;
}

console.log(topla4(2,5));


function topla5(a: number, b?:number): number {
    if(b){
    return a + b;
    }
    return a;

}

console.log(topla5(2,40));

function davetEt(ilkDavetli: string, ...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Ahmet", "Mehmet", "Ali", "Veli"));