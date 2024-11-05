/*
Case and Index Inverter
Write a function that takes a string input and returns the string in a reversed case and order.

Examples
invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

invert("step on NO PETS") ➞ "step on NO PETS"

invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
Notes
No empty strings and will neither contain special characters nor punctuation.
A recursive version of this challenge can be found via this link.

İşte sorunun Türkçe çevirisi:

### Soru:
Bir string alan ve bu string'i hem ters sıraya hem de harflerin büyük/küçük harflerini değiştiren bir fonksiyon yazın.

### Örnekler:
```javascript
invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

invert("step on NO PETS") ➞ "step on NO PETS"

invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
```

### Notlar:
- Boş stringler olmayacak ve stringler özel karakterler veya noktalama işaretleri içermeyecek.

*/

function invert(str) {
  let result = ""; // Ters çevrilmiş ve harfleri değiştirilmiş stringi tutmak için boş bir string oluşturuyoruz.

  // Döngü, stringin son karakterinden başlayarak ilk karakterine kadar geriye doğru gider.
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i]; // Her döngüde, stringin mevcut karakterini alıyoruz.

    // Eğer karakter büyük harf ise, onu küçük harfe çevir.
    // Eğer küçük harf ise, onu büyük harfe çevir.
    if (char === char.toUpperCase()) {
      result += char.toLowerCase(); // Büyük harfi küçük harfe çevirip result'a ekle.
    } else {
      result += char.toUpperCase(); // Küçük harfi büyük harfe çevirip result'a ekle.
    }
  }

  return result; // Sonuç olarak ters çevrilmiş ve harfleri değiştirilmiş string'i döndür.
}

console.log(invert("dLROW YM sI HsEt")); // "TeSh iS my worlD"
console.log(invert("ytInIUgAsnOc")); // "CoNSaGuiNiTY"
console.log(invert("step on NO PETS")); // "step on NO PETS"
