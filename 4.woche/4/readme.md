### Spread Syntax ve Rest Parametreler Üzerine Görevler

## Görev 1 - Spread ile Diziyi Birleştirme

Bir fonksiyon yazın, bu fonksiyon iki dizi almalı ve bu dizileri birleştirip yeni bir dizi olarak döndürmelidir. Spread syntax kullanarak dizileri birleştirin.

```js
function mergeArrays(arr1, arr2) {
  // Spread syntax kullanarak dizileri birleştirin
}

console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeArrays([5, 6], [7, 8, 9])); // [5, 6, 7, 8, 9]
```

---

## Görev 2 - Spread Syntax ile Nesne Kopyalama

Bir fonksiyon yazın, bu fonksiyon verilen bir nesneyi kopyalayıp yeni bir nesne olarak döndürmelidir. Bu işlem sırasında spread syntax kullanarak nesneyi genişletin.

```js
const original = { a: 1, b: 2, c: 3 };

function copyObject(obj) {
  // Spread syntax kullanarak nesneyi kopyalayın
}

console.log(copyObject(original)); // { a: 1, b: 2, c: 3 }
```

---

## Görev 3 - Rest Parametreleri ile Toplama Fonksiyonu

Bir fonksiyon yazın, bu fonksiyon rest parametrelerini kullanarak istediğiniz kadar sayıyı toplamalı ve sonucu döndürmelidir.

```js
function sum(...numbers) {
  // Rest parametreleri kullanarak sayıları toplayın
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
```

---

## Görev 4 - Spread Syntax ile Dizideki En Büyük Sayıyı Bulma

Spread syntax kullanarak, verilen bir dizideki en büyük sayıyı bulun. `Math.max()` fonksiyonunu kullanabilirsiniz.

```js
function findMax(arr) {
  // Spread syntax ve Math.max() kullanarak en büyük sayıyı bulun
}

console.log(findMax([1, 3, 7, 2, 9])); // 9
console.log(findMax([5, 6, 10, 12, 8])); // 12
```

---

## Görev 5 - Spread ve Rest Parametrelerini Birlikte Kullanma

Bir fonksiyon yazın, bu fonksiyon bir dizi ve bir sayı almalı. Diziyi genişletmek için spread syntax kullanın ve diziye verilen sayıyı ekleyin. Fonksiyon ayrıca rest parametrelerini kullanarak başka sayıları da diziye ekleyebilmeli.

```js
function extendArray(arr, num, ...rest) {
  // Spread syntax ve rest parametreleri kullanarak diziyi genişletin
}

console.log(extendArray([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(extendArray([7, 8], 9, 10, 11)); // [7, 8, 9, 10, 11]
```

---

Bu görevleri tamamladıktan sonra çözümlerinizi kontrol etmek üzere paylaşabilirsiniz!