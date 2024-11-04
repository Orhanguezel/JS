/*
Seven Boom!
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
Notes
N/A

### Seven Boom!
Bir dizi sayı alan ve eğer dizide 7 rakamı geçiyorsa "Boom!" döndüren bir fonksiyon oluşturun. Aksi takdirde, "Dizide 7 yok" mesajını döndürün.

#### Örnekler:
```javascript
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 sayısı dizide mevcut.

sevenBoom([8, 6, 33, 100]) ➞ "Dizide 7 yok"
// Hiçbir eleman 7 içermez.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 sayısı 7 içerir.
```

#### Notlar:
Geçerli bir açıklama bulunmamaktadır.

*/
function sevenBoom2(arr2) {
    return arr.join('').includes('7') ? 'Boom!' : 'there is no 7 in the array';
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));

function sevenBoom(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i].toString().includes('7')){
            return 'Boom!';
        }
    } return 'there is no 7 in the array';
}

