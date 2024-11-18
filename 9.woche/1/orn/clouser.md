İşte **closure** ile ilgili 5 örnek soru! Çözüm yaparken kafana takılan bir şey olursa bana yazabilirsin. 😊

---

### **1. Sayıcı Fonksiyonu**
Bir sayıcı (counter) oluşturmak istiyoruz. Her çağrıldığında bir önceki değeri saklamalı ve bir artırarak döndürmelidir.

```javascript
function createCounter() {
    // Burada closure'ı kullanarak bir sayıcı oluştur
}

// Kullanım:
const counter1 = createCounter();
console.log(counter1()); // Çıktı: 1
console.log(counter1()); // Çıktı: 2
console.log(counter1()); // Çıktı: 3

const counter2 = createCounter();
console.log(counter2()); // Çıktı: 1
console.log(counter2()); // Çıktı: 2
```

---

### **2. Dinamik Mesaj Üretici**
Bir mesaj üretici fonksiyon yaz. Bu fonksiyon, başlangıçta verilen bir mesajı hatırlayacak ve çağrıldığında o mesajı kişiselleştirerek döndürecek.

```javascript
function createMessageGenerator(baseMessage) {
    // Mesajı hatırlayan bir closure oluştur
}

// Kullanım:
const welcomeMessage = createMessageGenerator("Welcome");
console.log(welcomeMessage("Ali")); // Çıktı: Welcome, Ali!
console.log(welcomeMessage("Veli")); // Çıktı: Welcome, Veli!

const goodbyeMessage = createMessageGenerator("Goodbye");
console.log(goodbyeMessage("Ali")); // Çıktı: Goodbye, Ali!
```

---

### **3. Özel Banka Hesabı**
Bir banka hesabı oluşturalım. Hesap başlangıç bakiyesini almalı ve sadece "yatırma" ve "çekme" işlemlerine izin vermelidir. Bakiye dışarıdan doğrudan erişilememeli.

```javascript
function createBankAccount(initialBalance) {
    // Hesap işlemleri için bir closure oluştur
}

// Kullanım:
const myAccount = createBankAccount(1000);
myAccount.deposit(500); // Çıktı: Yatırılan: 500, Yeni Bakiye: 1500
myAccount.withdraw(300); // Çıktı: Çekilen: 300, Kalan Bakiye: 1200
myAccount.getBalance(); // Çıktı: Şu Anki Bakiye: 1200

console.log(myAccount.balance); // undefined (Dışarıdan erişim olmamalı)
```

---

### **4. Fonksiyon Üretimi**
Bir çarpan fonksiyonu (multiplier) üret. Bu fonksiyon bir sayı alacak ve çarpma işlemini yaparak sonucu döndürecek.

```javascript
function createMultiplier(multiplier) {
    // Çarpan fonksiyonu için closure oluştur
}

// Kullanım:
const double = createMultiplier(2);
console.log(double(5)); // Çıktı: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Çıktı: 15
```

---

### **5. Tekrar Etme Sayacı**
Bir fonksiyon oluştur. Bu fonksiyon, başka bir fonksiyonu çağırmadan önce kaç defa çağrıldığını takip etmeli.

```javascript
function createCallCounter() {
    // Çağrı sayısını takip eden bir closure oluştur
}

// Kullanım:
const counter = createCallCounter();
counter(); // Çıktı: Bu fonksiyon 1. kez çağrıldı
counter(); // Çıktı: Bu fonksiyon 2. kez çağrıldı
counter(); // Çıktı: Bu fonksiyon 3. kez çağrıldı
```

---

Cevaplarını yaz, birlikte kontrol edelim! 😊