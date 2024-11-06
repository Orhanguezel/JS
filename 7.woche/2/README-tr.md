

### Soru 1: Callback Fonksiyonu ile Toplama
Bir `sum()` fonksiyonu oluşturun. Bu fonksiyon, iki sayıyı almalı ve bunları toplamak için bir `callback` fonksiyonu kullanmalıdır.

```javascript
function sum(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(sum(5, 10, add)); // beklenen çıktı: 15
```

### Soru 2: Dizi Elemanlarını İki Katına Çıkarma
`doubleArray()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi almalı ve her bir elemanını iki katına çıkarmalıdır. Bunun için `map` yöntemini kullanın.

```javascript
function doubleArray(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleArray([1, 2, 3])); // beklenen çıktı: [2, 4, 6]
```

### Soru 3: Filtreleme ile Tek Sayıları Bulma
`filterOddNumbers()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi almalı ve yalnızca tek sayıları içeren yeni bir dizi döndürmelidir.

```javascript
function filterOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // beklenen çıktı: [1, 3, 5]
```

### Soru 4: Dizi Elemanlarını Küçük Harfle Yazma
`lowerCaseArray()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi almalı ve her bir elemanı küçük harfe çevirip yeni bir dizi döndürmelidir.

```javascript
function lowerCaseArray(strings) {
  return strings.map(str => str.toLowerCase());
}

console.log(lowerCaseArray(["HELLO", "WORLD"])); // beklenen çıktı: ["hello", "world"]
```

### Soru 5: Filtreleme ile Uzun Kelimeleri Bulma
`filterLongWords()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi kelime almalı ve yalnızca beş veya daha fazla harften oluşan kelimeleri döndürmelidir.

```javascript
function filterLongWords(words) {
  return words.filter(word => word.length >= 5);
}

console.log(filterLongWords(["cat", "elephant", "dog", "giraffe"])); // beklenen çıktı: ["elephant", "giraffe"]
```

### Soru 6: Sayıları Çift Olarak Dönüştürme
`convertToEvenNumbers()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi sayı almalı ve her bir sayıyı çift sayıya dönüştürmelidir. Eğer sayı çift ise olduğu gibi bırakın, değilse bir artırın.

```javascript
function convertToEvenNumbers(numbers) {
  return numbers.map(num => (num % 2 === 0 ? num : num + 1));
}

console.log(convertToEvenNumbers([1, 2, 3, 4])); // beklenen çıktı: [2, 2, 4, 4]
```

### Soru 7: Ürün Fiyatlarını Hesaplama
Bir ürün listesini ve her bir ürün için bir `discount` fonksiyonu oluşturarak, fiyatların indirimli halini döndüren `calculateDiscountedPrices()` fonksiyonunu yazın.

```javascript
function calculateDiscountedPrices(prices, discount) {
  return prices.map(price => price - discount(price));
}

function discount(price) {
  return price * 0.1; // %10 indirim
}

console.log(calculateDiscountedPrices([100, 200, 300], discount)); // beklenen çıktı: [90, 180, 270]
```

### Soru 8: Dizi Elemanlarının Uzunluklarını Hesaplama
`calculateStringLengths()` adında bir fonksiyon oluşturun. Bu fonksiyon, bir dizi string almalı ve her bir stringin uzunluğunu içeren bir dizi döndürmelidir.

```javascript
function calculateStringLengths(strings) {
  return strings.map(str => str.length);
}

console.log(calculateStringLengths(["apple", "banana", "cherry"])); // beklenen çıktı: [5, 6, 6]
```

### Soru 9: Dizi Elemanlarını Filtreleme
Bir dizi sayıyı alıp, yalnızca pozitif olanları döndüren `filterPositiveNumbers()` fonksiyonunu oluşturun.

```javascript
function filterPositiveNumbers(numbers) {
  return numbers.filter(num => num > 0);
}

console.log(filterPositiveNumbers([-1, 0, 1, 2, -2])); // beklenen çıktı: [1, 2]
```

### Soru 10: Nesnelerin Dönüştürülmesi
Bir dizi nesne içeren bir fonksiyon yazın. Bu fonksiyon, her nesnedeki `name` özelliğini `upperCase` ile döndürmelidir.

```javascript
function convertNamesToUpperCase(objects) {
  return objects.map(obj => obj.name.toUpperCase());
}

const people = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(convertNamesToUpperCase(people)); // beklenen çıktı: ["ALICE", "BOB", "CHARLIE"]
```

Bu görevler, `callback`, `map`, ve `filter` kullanımınızı geliştirmenize yardımcı olacak ve JavaScript dilinde fonksiyonel programlamayı anlamanızı kolaylaştıracaktır.