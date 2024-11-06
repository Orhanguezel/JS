### Soru 1: Ürün Listesi ve İndirim Kampanyası

Bir e-ticaret sitesinde, kullanıcıların karşısına çıkan bir ürün listesi var. Bu liste, her ürünün adını, fiyatını ve mevcut kategorisini içeriyor. Şimdi, sitede bir kampanya düzenleniyor ve belirli bir kategoriye (örneğin "Elektronik") ait ürünlerde %20 indirim uygulanacak. Diğer kategorilerde ise fiyatlar sabit kalacak.

**Görev:** `map` fonksiyonunu kullanarak ürün listesini güncelleyin. "Elektronik" kategorisindeki ürünlerin fiyatını %20 indirin, diğer kategorilerde fiyat aynı kalsın. Yeni listeyi `indirimliUrunler` adlı bir dizide saklayın.

```javascript
const urunler = [
    { isim: "Dizüstü Bilgisayar", fiyat: 5000, kategori: "Elektronik" },
    { isim: "Kitap", fiyat: 30, kategori: "Kitap" },
    { isim: "Telefon", fiyat: 3000, kategori: "Elektronik" },
    { isim: "Koltuk", fiyat: 700, kategori: "Mobilya" },
    { isim: "Televizyon", fiyat: 4000, kategori: "Elektronik" },
];

const indirimliUrunler = urunler.map(/* Burada map fonksiyonunu kullanarak görevi tamamlayın */);
console.log(indirimliUrunler);
```

**Beklenen Çıktı:**

```javascript
[
  { isim: "Dizüstü Bilgisayar", fiyat: 4000, kategori: "Elektronik" },
  { isim: "Kitap", fiyat: 30, kategori: "Kitap" },
  { isim: "Telefon", fiyat: 2400, kategori: "Elektronik" },
  { isim: "Koltuk", fiyat: 700, kategori: "Mobilya" },
  { isim: "Televizyon", fiyat: 3200, kategori: "Elektronik" },
]
```

---

### Soru 2: Blog Sayfasında Başlıkları Kısaltma

Bir blog web sitesinde, ana sayfada gösterilmek üzere tüm blog başlıklarının olduğu bir liste var. Ancak, başlıklar uzun olduğunda sitede tasarımsal sorunlar yaşanıyor. Bu yüzden, başlıklar 20 karakterden uzun olduğunda, başlığın sadece ilk 17 karakteri alınmalı ve sonuna `"..."` eklenerek gösterilmeli. 

**Görev:** `map` fonksiyonunu kullanarak başlıkları kısaltın ve yeni bir dizi olan `kisaltılmışBasliklar` dizisini oluşturun.

```javascript
const blogBasliklari = [
    "JavaScript ile Asenkron Programlama",
    "CSS Flexbox Rehberi",
    "React Hooks Kullanımı",
    "HTML5 ile Modern Web Tasarımı",
    "Veritabanı Yönetimi ve SQL",
];

const kisaltılmışBasliklar = blogBasliklari.map(/* Burada map fonksiyonunu kullanarak görevi tamamlayın */);
console.log(kisaltılmışBasliklar);
```

**Beklenen Çıktı:**

```javascript
[
  "JavaScript ile Ase...",
  "CSS Flexbox Rehberi",
  "React Hooks Kullan...",
  "HTML5 ile Modern W...",
  "Veritabanı Yönetimi ve SQL",
]
```

---

### Soru 3: Kullanıcı Profillerinde Yaş Hesaplama

Bir sosyal medya uygulamasında kullanıcı profilleri listeleniyor. Her kullanıcının doğum yılı ve adı kaydedilmiş durumda. Şimdi, bu kullanıcıların yaşını hesaplayarak profil bilgilerine yaş alanı eklemek istiyoruz. 

**Görev:** `map` fonksiyonunu kullanarak her bir kullanıcıya `yas` alanı ekleyin. `yas` değeri, mevcut yıla göre (örneğin 2024) hesaplanmalı. Sonuçları `guncelProfiller` adlı bir dizide saklayın.

```javascript
const kullanicilar = [
    { isim: "Ali", dogumYili: 1990 },
    { isim: "Ayşe", dogumYili: 1985 },
    { isim: "Mehmet", dogumYili: 2000 },
    { isim: "Fatma", dogumYili: 1995 },
    { isim: "Can", dogumYili: 1978 },
];

const mevcutYil = 2024;

const guncelProfiller = kullanicilar.map(/* Burada map fonksiyonunu kullanarak görevi tamamlayın */);
console.log(guncelProfiller);
```

**Beklenen Çıktı:**

```javascript
[
  { isim: "Ali", dogumYili: 1990, yas: 34 },
  { isim: "Ayşe", dogumYili: 1985, yas: 39 },
  { isim: "Mehmet", dogumYili: 2000, yas: 24 },
  { isim: "Fatma", dogumYili: 1995, yas: 29 },
  { isim: "Can", dogumYili: 1978, yas: 46 },
]
```

---

Bu üç soru, gerçek dünyada web uygulamalarında sıklıkla karşılaşabileceğiniz `map` kullanım senaryolarını kapsar ve pratik bir anlayış kazanmanıza yardımcı olur.