/*
Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
Notes
N/A
İşte sorunun Türkçeye çevrilmiş hali:

### Soru:
Bir sayının Oddish mi yoksa Evenish mi olduğunu belirleyen bir fonksiyon yazın. Eğer bir sayının rakamlarının toplamı tek ise, bu sayı Oddish (tek) olarak kabul edilir. Eğer rakamlarının toplamı çift ise, Evenish (çift) kabul edilir. Eğer bir sayı Oddish ise "Oddish" döndürün. Aksi takdirde, "Evenish" döndürün.

Örneğin, `oddishOrEvenish(121)` "Evenish" döndürmelidir, çünkü 1 + 2 + 1 = 4'tür. `oddishOrEvenish(41)` "Oddish" döndürmelidir, çünkü 4 + 1 = 5'tir.

### Örnekler:
```javascript
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
```

### Notlar:
Bu problemde herhangi bir özel durum veya ek bilgi bulunmamaktadır.
*/

function oddishOrEvenish(num) {
    let sum = 0;
    const digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(43)); // "Oddish"
console.log(oddishOrEvenish(373)); // "Oddish"
console.log(oddishOrEvenish(4433)); // "Evenish"

