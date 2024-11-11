`Date` nesnesi JavaScript'te tarih ve saatle çalışmak için kullanılır ve birçok farklı yöntemle oluşturulabilir ve çeşitli metodlarla tarih, saat bilgilerini almamızı sağlar. Bu örneklerle `Date` nesnesini ve onun özelliklerini daha iyi anlayabiliriz.

### 1. `Date` Nesnesi Oluşturma

#### a. Şu anki Tarih ve Saati Alma
En basit haliyle `Date` nesnesini oluşturduğumuzda, o anki tarih ve saat bilgilerini alırız:

```javascript
const now = new Date();
console.log(now); // Ör: Wed Nov 6 2024 10:15:30 GMT+0000 (UTC)
```

Bu, tarayıcının bulunduğu saat dilimindeki anlık tarihi ve saati verir.

#### b. Belirli Bir Tarihi Oluşturma
`Date` nesnesini, belirli bir tarih ve saat ile de oluşturabiliriz. Bu tarih verilerini yıl, ay (0-11), gün, saat, dakika, saniye, milisaniye olarak girebiliriz:

```javascript
const specificDate = new Date(2023, 10, 6, 12, 30, 0); // Kasım 6, 2023, 12:30:00
console.log(specificDate); // Ör: Mon Nov 6 2023 12:30:00 GMT+0000 (UTC)
```

> **Not:** Aylar 0’dan başladığı için Kasım ayı `10` olarak girilir.

#### c. Tarih Dizesi ile Oluşturma
ISO formatında bir tarih dizesi kullanarak tarih oluşturabiliriz:

```javascript
const dateFromString = new Date("2024-11-06T10:15:30Z");
console.log(dateFromString); // Ör: Wed Nov 6 2024 10:15:30 GMT+0000 (UTC)
```

Bu format, tüm tarayıcılarda güvenilir sonuçlar elde etmek için önerilen bir formattır.

---

### 2. Tarih ve Saat Bilgilerini Alma

`Date` nesnesi ile tarih ve saat bileşenlerine tek tek erişmek mümkündür.

#### a. `getFullYear()`
Yılı alır.

```javascript
console.log(now.getFullYear()); // Ör: 2024
```

#### b. `getMonth()`
Ayı alır (0-11 arası döner, 0 Ocak ayıdır).

```javascript
console.log(now.getMonth()); // Ör: 10 (Kasım için)
```

#### c. `getDate()`
Günü alır (1-31 arası).

```javascript
console.log(now.getDate()); // Ör: 6
```

#### d. `getDay()`
Haftanın gününü alır (0 Pazar, 6 Cumartesi).

```javascript
console.log(now.getDay()); // Ör: 3 (Çarşamba)
```

#### e. `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`
Saat, dakika, saniye ve milisaniye bilgilerini almak için kullanılır.

```javascript
console.log(now.getHours()); // Ör: 10
console.log(now.getMinutes()); // Ör: 15
console.log(now.getSeconds()); // Ör: 30
console.log(now.getMilliseconds()); // Ör: 123
```

---

### 3. Tarih ve Saat Bilgilerini Değiştirme

Tarih ve saat değerlerini `set` metodları ile değiştirebiliriz.

```javascript
now.setFullYear(2025);
now.setMonth(5); // Haziran ayı
now.setDate(15);

console.log(now); // Yeni tarih: 15 Haziran 2025
```

---

### 4. Zaman Hesaplamaları

İki tarih arasında geçen zamanı milisaniye cinsinden hesaplayabiliriz:

```javascript
const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");

const differenceInMs = endDate - startDate;
const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

console.log(differenceInDays); // 365
```

---

### 5. Tarihi Metne Çevirme

`Date` nesnesini okunabilir bir metne çevirmek için çeşitli metodlar bulunur.

#### a. `toDateString()`
Sadece tarihi verir.

```javascript
console.log(now.toDateString()); // Ör: Wed Nov 6 2024
```

#### b. `toTimeString()`
Sadece saati verir.

```javascript
console.log(now.toTimeString()); // Ör: 10:15:30 GMT+0000 (UTC)
```

#### c. `toISOString()`
ISO formatında tarih ve saat verir.

```javascript
console.log(now.toISOString()); // Ör: 2024-11-06T10:15:30.000Z
```

#### d. `toLocaleString()`
Yerel formatta tarih ve saat verir.

```javascript
console.log(now.toLocaleString()); // Ör: 06.11.2024 10:15:30
```

---

### 6. Zaman Damgası ile Çalışmak

Milisaniye cinsinden zaman damgasını (epoch time) almak veya belirli bir milisaniyeyi tarih olarak göstermek için `getTime` ve `setTime` kullanılabilir.

```javascript
const timestamp = now.getTime();
console.log(timestamp); // Ör: 1730495730000 (milisaniye)

const newDateFromTimestamp = new Date(timestamp);
console.log(newDateFromTimestamp); // Aynı tarih ve saat
```

---

Bu temel bilgilerle `Date` nesnesini kullanarak tarih ve saat bilgilerini yönetebilir, işlemler yapabilir ve formatlayabilirsiniz.