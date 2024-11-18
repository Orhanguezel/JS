### **Closures Nedir?**

**Closure**, JavaScript’te bir fonksiyon ile bu fonksiyonun çevresel (lexical) değişkenlerinin bir arada tutulmasıdır. Bir closure, bir fonksiyonun kendi çevresel değişkenlerine erişebilmesini sağlar. Kısacası, bir inner (iç) fonksiyonun, kendisini çevreleyen outer (dış) fonksiyonun değişkenlerine erişebilmesini ifade eder.

---

### **Closures Nasıl Çalışır?**

#### **1. Lexical Scope (Leksik Alan)**

```javascript
function init() {
  const name = "Mozilla"; // Outer fonksiyonda tanımlanan değişken
  function displayName() {
    // Inner fonksiyon
    console.log(name); // name değişkenine erişim
  }
  displayName(); // Inner fonksiyon çağrılır
}

init(); // Çıktı: Mozilla
```

- **Nasıl Çalışır?**
  - `displayName`, içindeki hiçbir değişkeni tanımlamasa da, kendisini çevreleyen `init` fonksiyonunun `name` değişkenine erişebilir. Bu, **lexical scoping** (leksik alan) olarak adlandırılır.

---

#### **2. Fonksiyon Döndüren Fonksiyonlar**

Bir fonksiyon, başka bir fonksiyonu döndürdüğünde, inner fonksiyon closure oluşturur.

```javascript
function makeFunc() {
  const name = "Mozilla";
  return function displayName() {
    console.log(name);
  };
}

const myFunc = makeFunc(); // makeFunc çalıştırılır, displayName döndürülür
myFunc(); // Çıktı: Mozilla
```

- **Neler Oldu?**
  - `makeFunc` bittiğinde, `name` değişkeni yok olmamıştır. Çünkü döndürülen `displayName` fonksiyonu, `makeFunc` içindeki `name` değişkenini kendi lexical alanında tutar.

---

#### **3. Parametrelerle Closure**

Closure kullanılarak parametreleri "hatırlamak" mümkündür.

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // x = 5
const add10 = makeAdder(10); // x = 10

console.log(add5(2)); // Çıktı: 7 (5 + 2)
console.log(add10(2)); // Çıktı: 12 (10 + 2)
```

- **Neler Oldu?**
  - `makeAdder(5)` çağrısı, `x`’in 5 olduğu bir closure oluşturur.
  - `makeAdder(10)` çağrısı ise `x`’in 10 olduğu başka bir closure oluşturur.

---

### **Pratik Closures**

Closures, gerçek dünyada sıkça kullanılır. Özellikle **callback** fonksiyonlarda veya **private (özel) değişkenler** oluştururken çok işlevseldir.

---

#### **1. Private (Özel) Değişkenler**

Closure kullanarak, dışarıdan erişilemeyen özel değişkenler oluşturabilirsiniz.

```javascript
const counter = (function () {
  let privateCounter = 0; // Private değişken
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1
```

- **Nasıl Çalışır?**
  - `privateCounter` dışarıdan erişilemez.
  - Ancak, `increment`, `decrement`, ve `value` fonksiyonları bu değişkene erişebilir.

---

#### **2. Event Tabanlı Kullanım**

Closure, kullanıcı etkileşimleri sırasında veri taşımak için kullanılabilir.

```javascript
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

- **Nasıl Çalışır?**
  - `makeSizer` fonksiyonu, bir closure oluşturur ve bu closure, `size` parametresini saklar.
  - Her buton için farklı bir font boyutu uygulanabilir.

---

### **Performans ve Kullanım Tavsiyeleri**

1. **Aşırı Closure Oluşturmaktan Kaçının**
   - Her closure, bellekte saklanan ayrı bir lexical alan oluşturur. Gereksiz closure'lar performansı olumsuz etkileyebilir.

2. **Prototype Kullanımı**
   - Birden fazla nesne yaratırken closure yerine **prototype** kullanmak, bellekte tasarruf sağlar.

```javascript
function MyObject(name) {
  this.name = name;
}

MyObject.prototype.getName = function () {
  return this.name;
};

const obj1 = new MyObject("Ali");
const obj2 = new MyObject("Veli");

console.log(obj1.getName()); // Ali
console.log(obj2.getName()); // Veli
```

- **Avantajı:**
  - Tüm nesneler aynı `getName` fonksiyonunu paylaşır. Her nesne için ayrı bir closure oluşturulmaz.

---

### **Özet**

| **Kullanım Alanı**     | **Closure**                              | **Prototype**                          |
|-------------------------|------------------------------------------|----------------------------------------|
| **Private Değişkenler** | Evet (Closure ideal)                    | Hayır                                  |
| **Bellek Kullanımı**    | Closure'lar fazla bellek kullanabilir   | Daha az bellek tüketir                 |
| **Dinamiklik**          | Closure ile dinamik veriler saklanabilir| Statik metotlar kullanılır             |

---

### **Sonuç**

Closure, JavaScript’in güçlü bir özelliğidir ve:
- Private değişkenler oluşturmak,
- Callback'ler veya event'ler ile çalışmak,
- Fonksiyonel programlama tekniklerini kullanmak için idealdir.

Ancak performans açısından dikkatli kullanılmalı ve gereksiz closure’lardan kaçınılmalıdır. **Prototype** ve **closure** arasındaki dengeyi kurmak, profesyonel bir JavaScript geliştiricisi için önemli bir beceridir. 🎯










### **Closures Nedir?**

**Closures**, bir fonksiyonun, kendisini çevreleyen dış fonksiyonun değişkenlerine erişmesini sağlayan bir özelliktir. Closure sayesinde bir fonksiyon, tanımlandığı yerdeki değişkenlere erişebilir ve bu değişkenleri saklayabilir.

---

### **1. Basit Bir Closure Örneği**

```javascript
function outerFunction() {
  const message = "Hello from outerFunction!";
  
  function innerFunction() {
    console.log(message); // Dış fonksiyonun değişkenine erişim
  }
  
  return innerFunction; // Inner fonksiyonu döndür
}

const closureExample = outerFunction();
closureExample(); // Çıktı: Hello from outerFunction!
```

**Nasıl Çalışır?**
- `innerFunction`, `outerFunction` içinde tanımlanmıştır ve onun çevresel değişkenine (`message`) erişebilir.
- `closureExample` çağrıldığında, `message` değişkeni hâlâ hatırlanır.

---

### **2. Closure ile Sayaç (Counter)**

Closure kullanarak bir sayaç yapabiliriz. Bu sayaç, dışarıdan değiştirilemeyen bir özel değişken kullanır.

```javascript
function createCounter() {
  let count = 0; // Özel değişken

  return function () {
    count++; // Değeri artır
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Çıktı: 1
counter(); // Çıktı: 2
counter(); // Çıktı: 3
```

**Nasıl Çalışır?**
- `createCounter` her çağrıldığında, `count` değişkenini koruyan bir closure oluşturulur.
- Bu closure sayesinde `count` değişkenine dışarıdan erişilmez, ancak artırılabilir.

---

### **3. Parametrelerle Closure**

Bir closure, parametreleri saklayabilir ve bu parametrelerle işlem yapabilir.

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // factor = 2
const triple = multiplier(3); // factor = 3

console.log(double(5)); // Çıktı: 10 (5 * 2)
console.log(triple(5)); // Çıktı: 15 (5 * 3)
```

**Nasıl Çalışır?**
- `multiplier` fonksiyonu, `factor` parametresini saklayan bir closure döndürür.
- Döndürülen fonksiyonlar, saklanan `factor` değerini kullanarak işlem yapar.

---

### **4. Event Listener ile Closure**

Closure, event listener’larda kullanışlıdır. Her bir buton, kendi mesajını hatırlayabilir.

```javascript
function setupButtons() {
  const messages = ["Button 1 clicked!", "Button 2 clicked!", "Button 3 clicked!"];
  
  for (let i = 0; i < messages.length; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i + 1}`;
    button.onclick = function () {
      console.log(messages[i]); // Her buton kendi mesajını hatırlar
    };
    document.body.appendChild(button);
  }
}

setupButtons();
```

**Nasıl Çalışır?**
- Her buton için ayrı bir closure oluşturulur.
- Closure sayesinde her buton, `messages` dizisindeki doğru mesajı hatırlar.

---

### **5. Private (Özel) Değişkenler**

Closure, dışarıdan erişilemeyen özel değişkenler oluşturabilir.

```javascript
function bankAccount(initialBalance) {
  let balance = initialBalance; // Özel değişken

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds.");
      } else {
        balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${balance}`);
      }
    },
    checkBalance() {
      return balance;
    },
  };
}

const myAccount = bankAccount(100);
myAccount.deposit(50); // Çıktı: Deposited: 50. New balance: 150
myAccount.withdraw(30); // Çıktı: Withdrew: 30. New balance: 120
console.log(myAccount.checkBalance()); // Çıktı: 120
```

**Nasıl Çalışır?**
- `balance` değişkeni sadece `deposit`, `withdraw` ve `checkBalance` fonksiyonlarıyla erişilebilir.
- Dışarıdan direkt olarak `balance` değişkenine erişilemez.

---

### **6. Fonksiyon Fabrikası**

Closure kullanarak dinamik fonksiyonlar oluşturabilirsiniz.

```javascript
function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("Application started."); // Çıktı: [INFO] Application started.
errorLogger("An error occurred."); // Çıktı: [ERROR] An error occurred.
```

**Nasıl Çalışır?**
- `createLogger`, `prefix` değişkenini saklayan bir closure döndürür.
- Döndürülen fonksiyon, her çağrıldığında `prefix` değişkenini kullanır.

---

### **7. Gecikmeli Mesaj Gönderimi**

Closure, zamanlama ve gecikme işlemlerinde kullanışlıdır.

```javascript
function delayedMessage(message, delay) {
  setTimeout(function () {
    console.log(message); // Closure ile mesaj saklanır
  }, delay);
}

delayedMessage("Hello after 2 seconds", 2000); // Çıktı: Hello after 2 seconds
delayedMessage("Hello after 4 seconds", 4000); // Çıktı: Hello after 4 seconds
```

**Nasıl Çalışır?**
- `setTimeout`, closure sayesinde `message` ve `delay` değerlerini hatırlar.

---

### **8. Recursive Closure ile İleri Seviye Örnek**

Closure ile bir sayının faktöriyelini hesaplamak:

```javascript
function factorial(n) {
  return (function calc(x) {
    if (x === 1) return 1; // Base case
    return x * calc(x - 1); // Recursive case
  })(n);
}

console.log(factorial(5)); // Çıktı: 120
```

---

### **9. Closure ile Scope Zinciri**

Closure, iç içe geçmiş fonksiyonların dış fonksiyonlara erişmesini sağlar.

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // Çıktı: 10
```

**Nasıl Çalışır?**
- Her fonksiyon, bir üstteki fonksiyonun parametrelerine erişebilir.

---

### **Closure Kullanmanın Avantajları**

1. **Veri Saklama**:
   - Closure, bir fonksiyonun çağrıları arasında veri saklamanızı sağlar.

2. **Encapsulation (Kapsülleme)**:
   - Değişkenleri dış dünyadan gizleyerek daha güvenli bir yapı sunar.

3. **Dinamik Fonksiyonlar**:
   - Closure, parametreleri hatırlayan ve onlarla işlem yapan fonksiyonlar oluşturmanıza olanak tanır.

---

### **Özet**

Closure, JavaScript'in güçlü özelliklerinden biridir ve:
- Sayaçlar,
- Event listener'lar,
- Modül desenleri,
- API işlemleri gibi birçok alanda kullanılır.

Kolaydan zora örneklerle gördüğünüz gibi closure, kodunuzu daha modüler, esnek ve güvenli hale getirir. Uygun şekilde kullanıldığında, yazılım geliştirme sürecini büyük ölçüde kolaylaştırır. 🎯