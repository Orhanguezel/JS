let isim = "Ali";
let yas = 25;
let ogrenci = true;
let numaralar = [1, 2, 3];
let tuple = ["John", 24];
var Renkler;
(function (Renkler) {
    Renkler[Renkler["Kirmizi"] = 0] = "Kirmizi";
    Renkler[Renkler["Yesil"] = 1] = "Yesil";
    Renkler[Renkler["Mavi"] = 2] = "Mavi";
})(Renkler || (Renkler = {}));
let renk = Renkler.Kirmizi;
let deger = "Merhaba";
deger = 5;
deger = true;
console.log(isim, yas, ogrenci, numaralar, tuple, renk, deger);
let deger2 = undefined;
function selamla() {
    console.log("Merhaba");
}
selamla();
let yas2;
yas2 = 25;
class Musteri {
    constructor(ad, yas) {
        this.ad = ad;
        this.yas = yas;
    }
}
function topla(a, b) {
    return a + b;
}
console.log(topla(5, 10));
console.log(isim, yas, ogrenci, numaralar, tuple, renk);
function merhaba(isim, yas) {
    return yas ? `${isim}, ${yas} yaşında` : `Merhaba, ${isim}`;
}
console.log(merhaba("Ali"));
console.clear();
const carp = (a, b) => a * b;
console.log(carp(5, 10));
class Araba {
    constructor(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    bilgi() {
        return `${this.marka} ${this.model}`;
    }
}
const araba = new Araba("Toyota", "Corolla");
console.log(araba.bilgi());
console.clear();
const kisi = {
    ad: "Ali",
    yas: 30,
    konus: () => console.log("Merhaba!")
};
kisi.konus();
console.clear();
function ekle(deger) {
    return deger;
}
let sayi = ekle(-5);
let metin = ekle("Merhaba");
console.log(sayi, metin);
