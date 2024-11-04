/*
Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx.

İşte sorunun Türkçe çevirisi:

### Soru:
Bir dizi string alan ve içinde sayı olan string'leri içeren yeni bir dizi döndüren bir fonksiyon oluşturun. Eğer hiçbir string'de sayı yoksa, boş bir dizi döndürün.

### Örnekler:
```javascript
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
```

### Notlar:
- String'ler boşluklar veya herhangi bir karakter içerebilir.
- Bonus: Bu soruyu RegEx kullanmadan çözmeyi deneyin.
*/

function numInStr(arr) {
    let result = [];  // İçinde rakam olan string'leri saklamak için bir dizi.

    for (let i = 0; i < arr.length; i++) {  // Tüm string'ler arasında dolaş
        let hasNumber = false;  // Başlangıçta string'in içinde rakam yok varsayıyoruz.
        
        for (let j = 0; j < arr[i].length; j++) {  // Her string'in karakterlerine bak
            if (!isNaN(arr[i][j]) && arr[i][j] !== ' ') {  // Eğer bir rakam varsa
                hasNumber = true;  // Rakam bulunduğunu işaretle
                break;  // İlk rakamı bulduktan sonra bu string için daha fazla kontrol yapmaya gerek yok.
            }
        }

        if (hasNumber) {
            result.push(arr[i]);  // Rakam içeren string'i sonuç dizisine ekle
        }
    }

    return result;  // İçinde rakam olan tüm string'leri döndür
}

console.log(numInStr(["1a", "a", "2b", "b"]));          // ["1a", "2b"]
console.log(numInStr(["abc", "abc10"]));                // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"]));     // ["test1"]
