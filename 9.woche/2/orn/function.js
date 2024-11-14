function topla(a, b) {
    return a + b;
}
function topla2(a, b) {
    return a + b;
}
let topla3 = function (a, b) {
    return a + b;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 3));
console.log(topla2(2, 3));
console.log(topla3(2, 3));
function topla4(a, b = 4) {
    return a + b;
}
console.log(topla4(2, 5));
function topla5(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
console.log(topla5(2, 40));
function davetEt(ilkDavetli, ...digerleri) {
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Ahmet", "Mehmet", "Ali", "Veli"));
