/*
Length of a Nested Array
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
Notes
An empty array should return 0.


İşte sorunun Türkçe çevirisi:

### Soru:
Bir dizinin `.length` özelliği, dizideki eleman sayısını döndürür. Örneğin, aşağıdaki dizi 2 eleman içerir:

```javascript
[1, [2, 3]]
```
Bu dizide 2 eleman vardır: 1 ve [2, 3] dizisi.

Ancak, iç içe dizilerde yer alan tüm elemanların toplam sayısını öğrenmek istediğimizi varsayalım. Yukarıdaki örnekte, [1, [2, 3]] dizisi, 3 iç içe olmayan eleman içerir: 1, 2 ve 3.

İç içe bir dizideki toplam iç içe olmayan eleman sayısını döndüren bir fonksiyon yazın.

### Örnekler:
```javascript
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
```

### Notlar:
- Boş bir dizi 0 döndürmelidir.
*/

function getLength(arr) {
    // Diziyi düzleştirmek için join() ile string yap ve içindeki sayıları ayır
    return arr.join(',').split(',').length;
}

console.log(getLength([1, [2, 3]])); // 3
console.log(getLength([1, [2, [3, 4]]])); // 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // 6
