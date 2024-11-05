/*
Integer in Range?
Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

Examples
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false
Notes
The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
Bounds will be always given as integers.

Tam Sayı Aralıkta mı?
Bir sayının `n`'in, `lower` ve `upper` sınırları içinde olup olmadığını doğrulayan bir fonksiyon oluşturun. Eğer `n` bir tam sayı değilse, false döndürün.

Örnekler
```js
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false
```

Notlar
- "Aralık içinde" terimi, bir sayının alt sınırdan büyük veya eşit, üst sınırdan ise küçük (ama eşit değil) olduğu anlamına gelir (örnek #2'ye bakınız).
- Sınırlar her zaman tam sayılar olarak verilecektir.

*/

function intWithinBounds(n, lower, upper) {
    return  n===Math.floor(n) && n >= lower && n < upper;
}

console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
