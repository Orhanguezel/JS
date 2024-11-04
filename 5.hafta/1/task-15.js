/*

**Bumerang Sayısı**

Bumerang, ters veya düz V şeklinde bir dizilimdir. Özellikle, bir bumerang şu şekilde tanımlanabilir: uzunluğu 3 olan bir alt dizi, ilk ve son basamak aynı, ortadaki basamak farklıdır.

Bazı bumerang örnekleri:

[3, 7, 3], [1, -1, 1], [5, 6, 5]

Bir dizideki toplam bumerang sayısını döndüren bir fonksiyon oluşturun.

Örnek olarak:

```js
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// Bu dizide 3 bumerang vardır: [3, 7, 3], [1, 5, 1], [2, -2, 2]
```

Bumeranglar çakışabilir, örneğin:

```js
[1, 7, 1, 7, 1, 7, 1]
// Soldan sağa 5 bumerang vardır: [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], ve [1, 7, 1]
```

### Örnekler:
```js
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
```

### Notlar:
[5, 5, 5] (üç aynı rakam) bumerang olarak kabul edilmez çünkü ortadaki rakam, ilk ve son rakamla aynıdır.
*/

function countBoomerangs(arr) {
	let count =0;
	for(let i=0; i<arr.length-2; i++){
		if((arr[i]===arr[i+2]) && (arr[i]!==arr[i+1])){
            count++;
		}
		
	}return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); //2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); //1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); //0
console.log(countBoomerangs([5, 5, 5])); //0