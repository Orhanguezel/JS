/*
Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

Sayı Sıfırdan Küçük veya Eşit mi?

Bir sayı alan ve bu sayının sıfırdan küçük veya ona eşit olup olmadığını kontrol eden bir fonksiyon oluştur. Eğer sayı sıfırdan küçük veya eşitse `true`, değilse `false` döndür.

Örnekler:
```js
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
```

Notlar:
- Sonucu döndürmeyi unutma.
- Eğer görevi çözerken takılırsan, Resources (Kaynaklar) sekmesinden yardım alabilirsin.
- Eğer gerçekten takılırsan, Solutions (Çözümler) sekmesindeki çözümleri açabilirsin.
*/
function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return true;
    }
    return false;
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
