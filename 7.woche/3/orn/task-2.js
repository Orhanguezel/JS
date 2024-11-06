// Soru 1
const urunler = [
    { isim: "Dizüstü Bilgisayar", fiyat: 5000, kategori: "Elektronik" },
    { isim: "Kitap", fiyat: 30, kategori: "Kitap" },
    { isim: "Telefon", fiyat: 3000, kategori: "Elektronik" },
    { isim: "Koltuk", fiyat: 700, kategori: "Mobilya" },
    { isim: "Televizyon", fiyat: 4000, kategori: "Elektronik" },
];

const indirimliUrunler = urunler.map((urun) => {
    if (urun.kategori=== "Elektronik") {
        return { ...urun, fiyat: urun.fiyat * 0.8 };
    }
    return urun;
});
console.log(indirimliUrunler);
console.clear();


// Soru 2

const blogBasliklari = [
    "JavaScript ile Asenkron Programlama",
    "CSS Flexbox Rehberi",
    "React Hooks Kullanımı",
    "HTML5 ile Modern Web Tasarımı",
    "Veritabanı Yönetimi ve SQL",
];

const kisaltılmışBasliklar = blogBasliklari.map((baslik) => {
    if (baslik.length>20){return baslik.slice(0, 17) + "...";}
    return baslik;
});
console.log(kisaltılmışBasliklar);

// Soru 3

const kullanicilar = [
    { isim: "Ali", dogumYili: 1990 },
    { isim: "Ayşe", dogumYili: 1985 },
    { isim: "Mehmet", dogumYili: 2000 },
    { isim: "Fatma", dogumYili: 1995 },
    { isim: "Can", dogumYili: 1978 },
];

const mevcutYil = 2024;

const guncelProfiller = kullanicilar.map((kullanici) => {
    return { ...kullanici, yas: mevcutYil - kullanici.dogumYili };
});
console.log(guncelProfiller);