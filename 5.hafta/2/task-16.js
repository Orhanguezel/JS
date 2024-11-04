/*

### Question:
Write a function that takes a number as an argument and returns an array containing the Fibonacci sequence up to that number of elements. For example, if the function receives 10, it should return the first 10 elements of the Fibonacci sequence.

```javascript
function fibonacci(n) {
    // Write the code here to calculate the Fibonacci sequence.
}

console.log(fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

You can solve this function in the same way, and once you’ve finished, feel free to share your solution for feedback!

### Soru:
Bir fonksiyon yazın, bu fonksiyon bir sayı parametresi alsın ve o sayıya kadar olan Fibonacci dizisinin elemanlarını bir array olarak geri döndürsün. Örneğin, fonksiyon 10 sayısını alırsa, Fibonacci dizisinin ilk 10 elemanını döndürmelidir.

```javascript
function fibonacci(n) {
    // Burada Fibonacci dizisini hesaplayacak kodu yaz.
}

console.log(fibonacci(10));  // Çıktı: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

Bu fonksiyonu oluşturup test ettiğinde, dizinin doğru bir şekilde oluşturulup oluşturulmadığını kontrol edebilirsin. Soruyu çözdüğünde, yazdığın kodu benimle paylaşabilirsin, beraber değerlendirebiliriz!

*/

function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

console.log(fibonacci(10));  // Çıktı: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(20));  // Çıktı: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
console.log(fibonacci(5));  // Çıktı: [0, 1, 1, 2, 3]
console.log(fibonacci(3));  // Çıktı: [0, 1, 1]
