/*
Is the Number a Repdigit
A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false
Notes
The number 0 should return true (even though it's not a positive number).
Check the Resources tab for more info on repdigits.

Bir repdigit, aynı rakamdan oluşan pozitif bir sayıdır. Bir fonksiyon oluşturun, bu fonksiyon bir tam sayı alır ve bu sayının repdigit olup olmadığını döndürür.

### Örnekler:
```js
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false
```

### Notlar:
- Sayı 0, pozitif bir sayı olmasa da `true` döndürmelidir.
- Repdigit hakkında daha fazla bilgi için Kaynaklar sekmesine göz atabilirsiniz.

*/

function isRepdigit(num) {
    if (num < 0) {
        return false;
    }

    const str = num.toString();

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[0]) {
            return false;
        }
    }
    
    return true;
}

console.log(isRepdigit(66));
console.log(isRepdigit(0));
console.log(isRepdigit(-11));
console.log(isRepdigit(112211));