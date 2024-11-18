### **Recursion (Özyineleme) Nedir?**

**Recursion**, bir fonksiyonun kendisini çağırdığı bir tekniktir. Bu yöntem genellikle bir problemi daha küçük alt problemlere bölerek çözmek için kullanılır. Recursive fonksiyonlarda genellikle iki durum bulunur:

1. **Base Case (Temel Durum)**: Özyinelemenin durdurulduğu koşul.
2. **Recursive Case (Özyineleme Durumu)**: Fonksiyonun kendisini çağırdığı durum.

---

### **Recursion’un Temelleri**

#### **Örnek 1: Basit Bir Recursive Fonksiyon**

```javascript
function countdown(x) {
  if (x > 0) {
    console.log(x); // Sayıyı yazdır
    countdown(x - 1); // Kendini çağır
  }
}

countdown(5);
```

**Çıktı:**
```plaintext
5
4
3
2
1
```

- **Nasıl Çalışır?**
  - `countdown(5)` çağrıldığında:
    - `x > 0` koşulu sağlanır ve 5 yazdırılır.
    - Fonksiyon, `countdown(4)` şeklinde kendisini çağırır.
    - Bu süreç `x === 0` olana kadar devam eder ve ardından recursion durur.

---

### **Özyinelemenin Sınırı**

Her recursive çağrı, **call stack** üzerinde bir yer kaplar. Call stack, sınırlı bir belleğe sahip olduğundan, çok fazla recursive çağrı yapılırsa bir **Stack Overflow** hatası oluşur.

#### **Call Stack Sınırını Görme**

```javascript
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i); // Recursive çağrı
  } catch {
    return i; // Hata olduğunda çağrı sayısını döndür
  }
};

console.log(getMaxCallStackSize(0));
```

Bu kod, JavaScript çalışma zamanında çağrı yığını boyutunun ne kadar büyük olduğunu belirler.

---

### **Pratik Recursion Örnekleri**

#### **1. Faktöriyel Hesaplama**

Faktöriyel, bir sayının kendisinden önceki tüm pozitif tam sayıların çarpımıdır. Recursive bir şekilde şu şekilde hesaplanabilir:

```javascript
const factorial = (n) => {
  if (n === 0) {
    return 1; // Base case
  } else {
    return n * factorial(n - 1); // Recursive case
  }
};

console.log(factorial(5)); // Çıktı: 120
```

**Nasıl Çalışır?**
- `factorial(5)`:
  - `5 * factorial(4)`
  - `4 * factorial(3)`
  - `3 * factorial(2)`
  - `2 * factorial(1)`
  - `1 * factorial(0)` => 1 (Base case)
- Sonuç: `5 * 4 * 3 * 2 * 1 = 120`

---

#### **2. Fibonacci Serisi**

Fibonacci serisi, her sayının kendisinden önceki iki sayının toplamı olduğu bir dizidir. (1, 1, 2, 3, 5, 8, ...)

```javascript
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10)); // Çıktı: 55
```

**Nasıl Çalışır?**
- `fibonacci(10)`:
  - `fibonacci(9) + fibonacci(8)`
  - `fibonacci(8) + fibonacci(7) + fibonacci(7) + fibonacci(6)`
  - Ve bu şekilde devam eder.

---

#### **3. Reduce Fonksiyonu (Recursive)**

Bir dizi üzerinde işlem yaparak tek bir değer döndürmek için `reduce` fonksiyonunu recursive olarak yazabilirsiniz:

```javascript
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);

console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5])); // Çıktı: 15
```

**Nasıl Çalışır?**
- Dizi `cur` (şu anki eleman) ve `rest` (geri kalan elemanlar) olarak ayrılır.
- `cur === undefined` olduğunda recursion durur.
- `fn(acc, cur)` ile işlem yapılır ve kalan elemanlar üzerinde işlem devam eder.

---

### **Recursion ile Sorun Çözme Adımları**

1. **Base Case Tanımlayın**:
   - Recursive fonksiyonlar bir yerde durmalıdır.
   - Base case, recursion’un biteceği durumu ifade eder.

2. **Alt Problemi Belirleyin**:
   - Fonksiyon, problemi daha küçük bir probleme bölmeli ve kendisini çağırmalıdır.

3. **Stack Overflow’u Önleyin**:
   - Fazla sayıda recursive çağrı yapmaktan kaçının.
   - Gerekirse iterasyon veya memoization kullanarak performansı artırın.

---

### **Memoization ile Recursion’u Optimize Etmek**

Recursive fonksiyonlar, aynı hesaplamaları tekrar tekrar yapabilir. **Memoization**, bu hesaplamaları önbelleğe alarak performansı artırır.

#### **Fibonacci Optimizasyonu**

```javascript
const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n]; // Memo'dan al
  if (n <= 2) return 1; // Base case
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Hesapla ve sakla
  return memo[n];
};

console.log(fibonacci(50)); // Çıktı: 12586269025
```

---

### **Recursion’un Avantajları ve Dezavantajları**

#### **Avantajları**
1. **Basit ve Anlaşılır Kod**:
   - Özellikle karmaşık, tekrarlayan problemlerde kod daha okunabilir olur.
2. **Matematiksel Problemler**:
   - Faktöriyel, Fibonacci gibi problemlerde ideal bir yöntemdir.

#### **Dezavantajları**
1. **Performans**:
   - Recursive çağrılar çok fazla bellek kullanabilir.
2. **Stack Overflow**:
   - Recursive çağrılar çağrı yığını dolmasına neden olabilir.
3. **İterasyondan Daha Yavaş**:
   - İterasyon, aynı problemi çözmek için genellikle daha verimlidir.

---

### **Recursion vs Iteration**

| **Özellik**          | **Recursion**                           | **Iteration**              |
|-----------------------|-----------------------------------------|----------------------------|
| **Okunabilirlik**     | Daha okunaklı                          | Daha karmaşık olabilir     |
| **Performans**        | Fazla çağrıda stack overflow riski var  | Daha performanslı          |
| **Uygunluk**          | Matematiksel ve ağaç yapıları için ideal| Çoğu problemde kullanılabilir |

---

### **Özet**

Recursion, bir problemin alt problemlerine bölünerek çözüldüğü güçlü bir tekniktir. Ancak doğru bir şekilde kullanılmazsa performans sorunlarına yol açabilir. Bu nedenle:
- **Base case** her zaman tanımlanmalıdır.
- Performans sorunlarını önlemek için **memoization** gibi teknikler kullanılmalıdır.
- Alternatif olarak, iterasyon gibi yöntemlerle karşılaştırılmalı ve en uygun çözüm seçilmelidir.

Recursion, doğru kullanıldığında hem etkili hem de güçlü bir araçtır. 🎯