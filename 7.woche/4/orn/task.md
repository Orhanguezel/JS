Elbette! Aşağıda `reduce` metodu kullanarak çözebileceğiniz 10 örnek senaryo hazırladım. Her bir örneğin açıklamasını da belirttim. Soruları çözmek için `reduce` metodunu kullanarak gerekli işlemleri yapabilirsiniz.

---

### Örnek 1: Toplam Yaş Hesaplama

Bir grup insanın yaşlarını içeren bir dizi var. Bu diziyi kullanarak tüm insanların yaşlarının toplamını hesaplayın.

```javascript
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 27 },
    { name: "Sara", age: 35 },
];

const totalAge = people.reduce((acc, person) => {
    // İşlemi buraya yazın
}, 0);

console.log("Toplam Yaş:", totalAge);
```

---

### Örnek 2: Ortalama Sıcaklık Hesaplama

Bir hafta boyunca günlük sıcaklık verilerini içeren bir dizi var. Bu diziyi kullanarak ortalama sıcaklığı hesaplayın.

```javascript
const temperatures = [20, 22, 19, 24, 21, 23, 20];

const averageTemperature = temperatures.reduce((acc, temp) => {
    // İşlemi buraya yazın
}, 0) / temperatures.length;

console.log("Ortalama Sıcaklık:", averageTemperature);
```

---

### Örnek 3: En Pahalı Ürünü Bulma

Bir alışveriş sepetindeki ürünlerin fiyatlarını içeren bir dizi var. Bu diziyi kullanarak en pahalı ürünü bulun.

```javascript
const prices = [19.99, 29.99, 9.99, 49.99, 39.99];

const maxPrice = prices.reduce((acc, price) => {
    // İşlemi buraya yazın
});

console.log("En Pahalı Ürün Fiyatı:", maxPrice);
```

---

### Örnek 4: Kelimeleri Birleştirerek Cümle Oluşturma

Bir dizi kelimeyi cümle haline getirin. `reduce` metodunu kullanarak kelimeleri birleştirin.

```javascript
const words = ["Hello", "world", "this", "is", "JavaScript"];

const sentence = words.reduce((acc, word) => {
    // İşlemi buraya yazın
}, "");

console.log("Cümle:", sentence);
```

---

### Örnek 5: Bir Sayının Faktöriyelini Hesaplama

Verilen bir sayının faktöriyelini `reduce` metodu kullanarak hesaplayın.

```javascript
const number = 5;
const factorial = Array.from({ length: number }, (_, i) => i + 1).reduce((acc, num) => {
    // İşlemi buraya yazın
}, 1);

console.log(`${number} sayısının faktöriyeli:`, factorial);
```

---

### Örnek 6: Sınıfın Not Ortalamasını Hesaplama

Bir sınıftaki öğrencilerin notlarını içeren bir dizi var. Bu diziyi kullanarak sınıfın not ortalamasını hesaplayın.

```javascript
const grades = [85, 90, 78, 92, 88];

const averageGrade = grades.reduce((acc, grade) => {
    // İşlemi buraya yazın
}, 0) / grades.length;

console.log("Sınıfın Not Ortalaması:", averageGrade);
```

---

### Örnek 7: En Uzun Kelimeyi Bulma

Bir dizideki kelimeleri kullanarak en uzun kelimeyi `reduce` ile bulun.

```javascript
const words = ["apple", "banana", "cherry", "watermelon", "grape"];

const longestWord = words.reduce((acc, word) => {
    // İşlemi buraya yazın
});

console.log("En Uzun Kelime:", longestWord);
```

---

### Örnek 8: Fiyatları Yuvarlayarak Toplama

Bir dizi ondalık fiyatı `Math.round` ile yuvarlayarak toplayın.

```javascript
const decimalPrices = [12.49, 7.99, 5.49, 15.99, 3.75];

const totalRoundedPrice = decimalPrices.reduce((acc, price) => {
    // İşlemi buraya yazın
}, 0);

console.log("Yuvarlanmış Toplam Fiyat:", totalRoundedPrice);
```

---

### Örnek 9: Pozitif ve Negatif Sayıları Ayrı Toplama

Bir dizideki pozitif ve negatif sayıları ayrı ayrı toplamak istiyorsunuz. `reduce` kullanarak iki ayrı toplam bulun.

```javascript
const numbers = [10, -5, 20, -15, 30, -25];

const { positiveSum, negativeSum } = numbers.reduce((acc, num) => {
    // İşlemi buraya yazın
}, { positiveSum: 0, negativeSum: 0 });

console.log("Pozitif Sayıların Toplamı:", positiveSum);
console.log("Negatif Sayıların Toplamı:", negativeSum);
```

---

### Örnek 10: Ürünlerin Toplam Ağırlığını Hesaplama

Bir kargo listesindeki ürünlerin ağırlıklarını içeren bir dizi var. `reduce` kullanarak toplam ağırlığı hesaplayın.

```javascript
const products = [
    { name: "Laptop", weight: 2.5 },
    { name: "Phone", weight: 0.5 },
    { name: "Monitor", weight: 3.0 },
    { name: "Keyboard", weight: 0.7 },
];

const totalWeight = products.reduce((acc, product) => {
    // İşlemi buraya yazın
}, 0);

console.log("Toplam Ağırlık:", totalWeight);
```

---

Bu soruları çözmek için `reduce` metodunu kullanabilirsiniz. Her bir örneği deneyerek `reduce` metodunun mantığını daha iyi kavrayabilirsiniz.