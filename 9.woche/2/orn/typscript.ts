let isim: string = "Ali";
let yas: number = 25;
let ogrenci: boolean = true;
let numaralar: number[] = [1, 2, 3];
let tuple: [string, number] = ["John", 24];
enum Renkler { Kirmizi, Yesil, Mavi }
let renk: Renkler = Renkler.Kirmizi;
let deger: any = "Merhaba";
deger = 5;
deger = true;
console.log(isim, yas, ogrenci, numaralar, tuple, renk, deger);
let deger2 :void = undefined;
function selamla(): void {
    console.log("Merhaba");
}

selamla();

let yas2:number;
yas2 = 25;
class Musteri {
    ad: string;
    yas: number;
    constructor(ad: string, yas: number) {
        this.ad = ad;
        this.yas = yas;
    }
}

function topla(a: number, b: number): number {
    return a + b;
}

console.log(topla(5, 10));
console.log(isim, yas, ogrenci, numaralar, tuple, renk);

function merhaba(isim: string, yas?: number): string {
    return yas ? `${isim}, ${yas} yaşında` : `Merhaba, ${isim}`;
}

console.log(merhaba("Ali"));

console.clear();

const carp = (a: number, b: number): number => a * b;
console.log(carp(5, 10));

class Araba {
    private marka: string;
    model: string;
    constructor(marka: string, model: string) {
        this.marka = marka;
        this.model = model;
    }

    bilgi(): string {
        return `${this.marka} ${this.model}`;
    }
}

const araba = new Araba("Toyota", "Corolla");
console.log(araba.bilgi());

console.clear();

interface Kisi {
    ad: string;
    yas: number;
    konus(): void;
}

const kisi: Kisi = {
    ad: "Ali",
    yas: 30,
    konus: () => console.log("Merhaba!")
};

kisi.konus();

console.clear();

function ekle<T>(deger: T): T {
    return deger;
}
let sayi = ekle<number>(-5);
let metin = ekle<string>("Merhaba");
console.log(sayi, metin);

