
---

### Görev 6

Bir kitap listesi içeren bir dizi var. Her kitap nesnesinde başlık, yazar ve yıl bilgisi bulunuyor. İlk kitabın başlığını ve yazarını ayrı değişkenlere, geri kalan kitapları ise bir dizi olarak ayrı bir değişkene saklayın.

```javascript
const books = [
   { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
   { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
   { title: "1984", author: "George Orwell", year: 1949 }
];

// Beklenen Çıktı:
// İlk Kitap: Sapiens
// İlk Yazar: Yuval Noah Harari
// Diğer Kitaplar: [{ title: "The Catcher in the Rye", ...}, {...}]
```

---

### Görev 7

Bir çalışan listesi içeren bir dizi var. İlk iki çalışanın isimlerini ayrı değişkenlerde saklayın. Diğer çalışanları ise bir dizi olarak saklayın.

```javascript
const employees = ["John", "Sarah", "Tim", "Kate", "Anna"];

// Beklenen Çıktı:
// İlk Çalışan: John
// İkinci Çalışan: Sarazzzzzz+    
// Diğer Çalışanlar: ["Tim", "Kate", "Anna"]
```

---

### Görev 8

Bir öğrenci nesnesi var. Bu nesne `name`, `grades`, `address` ve `hobbies` gibi özellikler içeriyor. `name` ve `grades` özelliklerini destructuring ile alın. Geri kalan özellikleri `otherInfo` adlı bir değişkende saklayın.

```javascript
const student = {
   name: "Michael",
   grades: [90, 85, 92],
   address: "123 Main St",
   hobbies: ["football", "reading"]
};

// Beklenen Çıktı:
// Name: Michael
// Grades: [90, 85, 92]
// Other Info: { address: "123 Main St", hobbies: ["football", "reading"] }
```

---

### Görev 9

Bir film nesnesi var. Film nesnesinden `title`, `director` ve `cast` bilgilerini destructuring ile alın. `cast` içindeki ilk ve son oyuncuyu ayrı değişkenlerde saklayın. Diğer oyuncuları bir dizi olarak saklayın.

```javascript
const movie = {
   title: "Inception",
   director: "Christopher Nolan",
   cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
};

// Beklenen Çıktı:
// Film: Inception
// Yönetmen: Christopher Nolan
// İlk Oyuncu: Leonardo DiCaprio
// Son Oyuncu: Tom Hardy
// Diğer Oyuncular: ["Joseph Gordon-Levitt", "Elliot Page"]
```

---

### Görev 10

Bir kitaplık nesnesi var ve her bir nesne bir kitabı temsil ediyor. `author` bilgisi iç içe bir nesne olarak tutuluyor. Destructuring ile kitabın başlığını ve yazarın soyadını alın.

```javascript
const library = {
   book: {
      title: "The Great Gatsby",
      author: {
         firstName: "F. Scott",
         lastName: "Fitzgerald"
      }
   }
};

// Beklenen Çıktı:
// Kitap Başlığı: The Great Gatsby
// Yazarın Soyadı: Fitzgerald
```

---

### Görev 11

Bir ürün nesnesi var ve bu nesne içinde stok bilgisi, fiyat bilgisi ve çeşitli özellikler var. Stok ve fiyat bilgilerini destructuring ile alın. Geri kalan özellikleri bir `details` adlı nesnede saklayın.

```javascript
const product = {
   name: "Laptop",
   stock: 100,
   price: 999,
   manufacturer: "Dell",
   color: "Black"
};

// Beklenen Çıktı:
// Stok: 100
// Fiyat: 999
// Diğer Bilgiler: { name: "Laptop", manufacturer: "Dell", color: "Black" }
```

---

### Görev 12

Bir şirket çalışanlarının maaşlarını içeren bir nesne var. Bu nesneden `CEO` ve `CFO` maaşlarını alın. Geri kalan çalışanların maaşlarını bir `otherSalaries` nesnesinde saklayın.

```javascript
const salaries = {
   CEO: 150000,
   CFO: 130000,
   CTO: 120000,
   manager: 90000,
   engineer: 80000
};

// Beklenen Çıktı:
// CEO Maaşı: 150000
// CFO Maaşı: 130000
// Diğer Maaşlar: { CTO: 120000, manager: 90000, engineer: 80000 }
```

---

### Görev 13

Bir öğrenci listesi içeren bir dizi var. İlk üç öğrenciyi ayrı değişkenlerde saklayın. Geri kalan öğrencileri bir dizi olarak ayrı bir değişkende saklayın ve sıraya göre ekrana yazdırın.

```javascript
const students = ["Ayşe", "Mehmet", "Fatma", "Ali", "Veli", "Can"];

// Beklenen Çıktı:
// Birinci Öğrenci: Ayşe
// İkinci Öğrenci: Mehmet
// Üçüncü Öğrenci: Fatma
// Kalan Öğrenciler: ["Ali", "Veli", "Can"]
```

---

### Görev 14

Bir araba özelliklerini içeren bir nesne var. `model`, `engine` ve `year` özelliklerini destructuring ile alın. `engine` içindeki `type` ve `horsepower` bilgilerini ayrı değişkenlerde saklayın.

```javascript
const car = {
   model: "Tesla Model S",
   engine: {
      type: "Electric",
      horsepower: 670
   },
   year: 2021
};

// Beklenen Çıktı:
// Model: Tesla Model S
// Motor Türü: Electric
// Beygir Gücü: 670
// Yıl: 2021
```

---

### Görev 15

Bir alışveriş sepeti nesnesi var ve içinde çeşitli ürünler var. İlk ürünü `firstItem` ve geri kalanları `otherItems` olarak ayırın. İlk ürünün `name` ve `price` bilgilerini ayrı değişkenlerde saklayın.

```javascript
const cart = [
   { name: "Phone", price: 699 },
   { name: "Tablet", price: 499 },
   { name: "Laptop", price: 999 },
];

// Beklenen Çıktı:
// İlk Ürün Adı: Phone
// İlk Ürün Fiyatı: 699
// Diğer Ürünler: [{ name: "Tablet", price: 499 }, { name: "Laptop", price: 999 }]
```

---
